const TEST_EMAIL_MARKERS = ["test", "qa", "dev", "demo", "staging", "sandbox"];

function getRequiredEnv(name) {
  const value = process.env[name]?.trim();

  if (!value) {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }

  return value;
}

function looksLikeTestEmail(email) {
  const normalizedEmail = email.toLowerCase();
  return TEST_EMAIL_MARKERS.some((marker) => normalizedEmail.includes(marker));
}

function buildHeaders(apiKey) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (apiKey) {
    headers.apikey = apiKey;
  }

  return headers;
}

function buildTokenUrl(baseUrl) {
  const url = new URL(baseUrl);
  url.pathname = "/auth/v1/token";
  url.searchParams.set("grant_type", "password");
  return url;
}

async function main() {
  const supabaseUrl = getRequiredEnv("SUPABASE_URL");
  const email = getRequiredEnv("SUPABASE_TEST_EMAIL");
  const password = getRequiredEnv("SUPABASE_TEST_PASSWORD");
  const apiKey =
    process.env.SUPABASE_ANON_KEY?.trim() ||
    process.env.SUPABASE_PUBLISHABLE_KEY?.trim() ||
    "";

  if (!looksLikeTestEmail(email)) {
    console.error(
      `Refusing to run against "${email}". Use a clearly non-production test account containing one of: ${TEST_EMAIL_MARKERS.join(
        ", ",
      )}.`,
    );
    process.exit(1);
  }

  const tokenUrl = buildTokenUrl(supabaseUrl);
  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: buildHeaders(apiKey),
    body: JSON.stringify({ email, password }),
  });

  const rawBody = await response.text();
  let parsedBody;

  try {
    parsedBody = JSON.parse(rawBody);
  } catch {
    parsedBody = rawBody;
  }

  if (!response.ok) {
    console.error(`Authentication failed with status ${response.status}.`);
    console.error(
      typeof parsedBody === "string"
        ? parsedBody
        : JSON.stringify(parsedBody, null, 2),
    );
    process.exit(1);
  }

  console.log("Authentication succeeded.");
  console.log(
    JSON.stringify(
      {
        userId: parsedBody.user?.id ?? null,
        email: parsedBody.user?.email ?? null,
        expiresAt: parsedBody.expires_at ?? null,
        tokenType: parsedBody.token_type ?? null,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error("Unexpected error during Supabase auth test.");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
