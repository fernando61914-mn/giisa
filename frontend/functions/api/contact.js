const MAX_BODY_BYTES = 16 * 1024;
const MAX_FIELD_LENGTHS = {
  name: 120,
  company: 160,
  email: 254,
  phone: 40,
  projectType: 100,
  message: 5000,
};

export async function onRequestPost({ request, env }) {
  const appsScriptUrl = env.PUBLIC_APPS_SCRIPT_URL;
  const turnstileSecret = env.TURNSTILE_SECRET_KEY;
  const appsScriptSecret = env.APPS_SCRIPT_SHARED_SECRET;

  if (!appsScriptUrl || !turnstileSecret || !appsScriptSecret) {
    console.error("Falta configuración privada para procesar el formulario.");
    return jsonRes({ error: "Servicio temporalmente no disponible." }, 503);
  }

  let appsScriptEndpoint;
  try {
    appsScriptEndpoint = new URL(appsScriptUrl);
  } catch {
    return jsonRes({ error: "Servicio temporalmente no disponible." }, 503);
  }

  if (
    appsScriptEndpoint.protocol !== "https:" ||
    appsScriptEndpoint.hostname !== "script.google.com"
  ) {
    console.error("La URL configurada para Apps Script no es válida.");
    return jsonRes({ error: "Servicio temporalmente no disponible." }, 503);
  }

  if (!request.headers.get("Content-Type")?.includes("application/json")) {
    return jsonRes({ error: "El formato de la solicitud no es válido." }, 415);
  }

  const declaredLength = Number(request.headers.get("Content-Length"));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return jsonRes({ error: "La solicitud es demasiado grande." }, 413);
  }

  let rawBody;
  try {
    rawBody = await request.text();
  } catch {
    return jsonRes({ error: "No se pudo leer la solicitud." }, 400);
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return jsonRes({ error: "La solicitud es demasiado grande." }, 413);
  }

  let body;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return jsonRes({ error: "Solicitud inválida." }, 400);
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return jsonRes({ error: "Solicitud inválida." }, 400);
  }

  if (typeof body["bot-field"] === "string" && body["bot-field"].trim()) {
    return jsonRes({ success: true });
  }

  if (body.privacyConsent !== true) {
    return jsonRes(
      { error: "Debes aceptar el aviso de privacidad para continuar." },
      400,
    );
  }

  const formData = Object.fromEntries(
    Object.entries(MAX_FIELD_LENGTHS).map(([field, maxLength]) => [
      field,
      typeof body[field] === "string"
        ? body[field].trim().slice(0, maxLength)
        : "",
    ]),
  );

  if (
    !formData.name ||
    !formData.email ||
    !formData.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    return jsonRes(
      { error: "Revisa los campos obligatorios del formulario." },
      400,
    );
  }

  const token = body["cf-turnstile-response"];
  if (typeof token !== "string" || !token) {
    return jsonRes({ error: "Falta la verificación de seguridad." }, 400);
  }

  let turnstileResult;
  try {
    const response = await fetchWithTimeout(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: turnstileSecret,
          response: token,
          remoteip: request.headers.get("CF-Connecting-IP") ?? undefined,
        }),
      },
      8000,
    );

    if (!response.ok) {
      return jsonRes({ error: "No se pudo verificar la seguridad." }, 502);
    }

    turnstileResult = await response.json();
  } catch {
    return jsonRes({ error: "No se pudo verificar la seguridad." }, 502);
  }

  if (turnstileResult?.success !== true) {
    return jsonRes({ error: "Verificación de seguridad fallida." }, 403);
  }

  try {
    const response = await fetchWithTimeout(
      appsScriptEndpoint.href,
      {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          ...formData,
          privacyConsent: true,
          timestamp: new Date().toLocaleString("es-MX", {
            timeZone: "America/Mexico_City",
          }),
          sharedSecret: appsScriptSecret,
        }),
        redirect: "follow",
      },
      15000,
    );

    if (!response.ok) {
      console.error("Apps Script respondió con un error HTTP.");
      return jsonRes({ error: "No se pudo registrar el formulario." }, 502);
    }

    const result = await response.json();
    if (result?.success !== true) {
      console.error("Apps Script rechazó el registro del formulario.");
      return jsonRes({ error: "No se pudo registrar el formulario." }, 502);
    }
  } catch {
    console.error("No se pudo completar el envío a Apps Script.");
    return jsonRes({ error: "No se pudo registrar el formulario." }, 502);
  }

  return jsonRes({ success: true });
}

async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

function jsonRes(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
