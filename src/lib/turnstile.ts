import { env } from "@/lib/env";

interface TurnstileResponse {
  success: boolean;
  "error-codes"?: string[];
}

export async function verifyTurnstile(
  token: string
): Promise<boolean> {
  // If in local development with test keys or mock test token
  if (
    process.env.NODE_ENV !== "production" &&
    (token === "test_token" ||
      token === "cf-turnstile-dummy" ||
      env.TURNSTILE_SECRET_KEY === "1x0000000000000000000000000000000AA")
  ) {
    return true;
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return false;
    }

    const result = (await response.json()) as TurnstileResponse;
    return result.success;
  } catch (error) {
    console.error("[TURNSTILE_VERIFY_ERROR]", error);
    // In development mode, fail-open to allow local testing if network is blocked
    if (process.env.NODE_ENV !== "production") {
      return true;
    }
    return false;
  }
}
