import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

export type ContactResponse = { success: boolean; message: string };

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .max(200, "Email is too long.")
    .email("Please provide a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(5000, "Message is too long."),
});

// Best-effort rate limiting per server instance: max 5 submissions per minute.
const recentSubmissions: number[] = [];
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isRateLimited() {
  const now = Date.now();
  while (recentSubmissions.length > 0 && now - recentSubmissions[0]! > RATE_WINDOW_MS) {
    recentSubmissions.shift();
  }
  if (recentSubmissions.length >= RATE_LIMIT) return true;
  recentSubmissions.push(now);
  return false;
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => data)
  .handler(async ({ data }): Promise<ContactResponse> => {
    try {
      // Backend validation — never trust the client.
      const parsed = contactSchema.safeParse(data);
      if (!parsed.success) {
        return {
          success: false,
          message: parsed.error.issues[0]?.message ?? "Please check the form and try again.",
        };
      }

      if (isRateLimited()) {
        return {
          success: false,
          message: "Too many messages sent. Please try again in a minute.",
        };
      }

      const supabase = createClient(
        process.env["VITE_SUPABASE_URL"]!,
        process.env["VITE_SUPABASE_PUBLISHABLE_KEY"]!,
        { auth: { persistSession: false, autoRefreshToken: false } },
      );

      const { error } = await supabase.from("contact_messages").insert(parsed.data);

      if (error) {
        // Log technical details server-side only.
        console.error("contact insert failed", error);
        return { success: false, message: "Something went wrong. Please try again later." };
      }

      return { success: true, message: "Your message has been sent successfully." };
    } catch (error) {
      console.error("contact handler failed", error);
      return { success: false, message: "Something went wrong. Please try again later." };
    }
  });
