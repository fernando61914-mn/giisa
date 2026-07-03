/**
 * Cloudflare Pages Function: POST /api/contact
 *
 * 1. Verifica el token de Cloudflare Turnstile
 * 2. Si pasa, reenvía los datos a Google Apps Script → Google Sheets
 *
 * Variables de entorno requeridas en Cloudflare Pages:
 *   TURNSTILE_SECRET_KEY   — clave secreta de Turnstile (no PUBLIC_)
 *   PUBLIC_APPS_SCRIPT_URL — URL del Apps Script desplegado
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  // Parsear body JSON
  let body;
  try {
    body = await request.json();
  } catch {
    return jsonRes({ error: "Solicitud inválida." }, 400);
  }

  // ── Verificar Turnstile ──────────────────────────────────────────────────
  const token = body["cf-turnstile-response"];
  if (!token) {
    return jsonRes({ error: "Falta la verificación de seguridad." }, 400);
  }

  const verify = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: request.headers.get("CF-Connecting-IP") ?? undefined,
      }),
    },
  );

  const { success } = await verify.json();
  if (!success) {
    return jsonRes({ error: "Verificación de seguridad fallida." }, 403);
  }

  // ── Enviar a Google Apps Script ──────────────────────────────────────────
  const { "cf-turnstile-response": _t, ...formData } = body;

  const appsScriptUrl = env.PUBLIC_APPS_SCRIPT_URL;
  if (appsScriptUrl) {
    try {
      await fetch(appsScriptUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toLocaleString("es-MX", {
            timeZone: "America/Mexico_City",
          }),
        }),
        redirect: "follow",
      });
    } catch {
      // El envío a Apps Script falló pero no bloqueamos al usuario
      console.error("Error enviando a Apps Script");
    }
  }

  return jsonRes({ success: true });
}

function jsonRes(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
