import assert from "node:assert/strict";
import { test } from "node:test";
import { onRequestPost } from "../functions/api/contact.js";

const validBody = {
  name: "Cliente de prueba",
  company: "GIISA test",
  email: "test@example.com",
  phone: "5512345678",
  projectType: "Obra Civil",
  message: "Solicitud de prueba aislada",
  "cf-turnstile-response": "valid-turnstile-token",
};

const validEnv = {
  TURNSTILE_SECRET_KEY: "turnstile-secret-for-test",
  PUBLIC_APPS_SCRIPT_URL: "https://script.google.com/macros/s/test/exec",
  APPS_SCRIPT_SHARED_SECRET: "shared-secret-for-test",
};

function createRequest(body = validBody, headers = {}) {
  return new Request("https://dev.giisa.pages.dev/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

test("rechaza solicitudes inválidas sin llamar a proveedores", async (t) => {
  t.mock.method(globalThis, "fetch", async () => {
    assert.fail("No se debe llamar a fetch con JSON inválido");
  });

  const response = await onRequestPost({
    request: createRequest("{"),
    env: validEnv,
  });

  assert.equal(response.status, 400);
});

test("falla si falta la URL o el secreto de Apps Script", async (t) => {
  t.mock.method(globalThis, "fetch", async () => {
    assert.fail("No se debe llamar a proveedores sin configuración");
  });

  const response = await onRequestPost({
    request: createRequest(),
    env: { ...validEnv, APPS_SCRIPT_SHARED_SECRET: "" },
  });

  assert.equal(response.status, 503);
});

test("acepta honeypot sin reenviar datos", async (t) => {
  t.mock.method(globalThis, "fetch", async () => {
    assert.fail("El honeypot no debe llamar a proveedores");
  });

  const response = await onRequestPost({
    request: createRequest({ ...validBody, "bot-field": "filled" }),
    env: validEnv,
  });

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
});

test("no reenvía si Turnstile rechaza el token", async (t) => {
  let callCount = 0;
  t.mock.method(globalThis, "fetch", async () => {
    callCount += 1;
    return Response.json({ success: false }, { status: 200 });
  });

  const response = await onRequestPost({
    request: createRequest(),
    env: validEnv,
  });

  assert.equal(response.status, 403);
  assert.equal(callCount, 1);
});

test("reenvía solo datos permitidos y la clave al Apps Script; no devuelve la clave", async (t) => {
  let forwarded;
  t.mock.method(globalThis, "fetch", async (url, options) => {
    if (String(url).includes("siteverify")) {
      return Response.json({ success: true }, { status: 200 });
    }

    forwarded = JSON.parse(options.body);
    return Response.json({ success: true }, { status: 200 });
  });

  const response = await onRequestPost({
    request: createRequest({ ...validBody, unexpected: "discard me" }),
    env: validEnv,
  });
  const result = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(result, { success: true });
  assert.equal(forwarded.sharedSecret, validEnv.APPS_SCRIPT_SHARED_SECRET);
  assert.equal(forwarded.unexpected, undefined);
  assert.equal(forwarded["cf-turnstile-response"], undefined);
  assert.equal(
    JSON.stringify(result).includes(validEnv.APPS_SCRIPT_SHARED_SECRET),
    false,
  );
});

test("no reporta éxito si Apps Script rechaza el registro", async (t) => {
  t.mock.method(globalThis, "fetch", async (url) => {
    if (String(url).includes("siteverify")) {
      return Response.json({ success: true }, { status: 200 });
    }

    return Response.json({ success: false }, { status: 200 });
  });

  const response = await onRequestPost({
    request: createRequest(),
    env: validEnv,
  });

  assert.equal(response.status, 502);
});

test("no reporta éxito si Apps Script no está disponible", async (t) => {
  t.mock.method(globalThis, "fetch", async (url) => {
    if (String(url).includes("siteverify")) {
      return Response.json({ success: true }, { status: 200 });
    }

    throw new Error("Apps Script unavailable");
  });

  const response = await onRequestPost({
    request: createRequest(),
    env: validEnv,
  });

  assert.equal(response.status, 502);
});
