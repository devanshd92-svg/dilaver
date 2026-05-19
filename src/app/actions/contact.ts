"use server";

import { getSupabasePublic } from "@/lib/supabase/public-client";

export type ContactState = { ok: boolean; message: string };

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill name, email, and message." };
  }

  const supabase = getSupabasePublic();
  if (supabase) {
    const { error } = await supabase.from("contact_inquiries").insert({
      name,
      email,
      phone: phone || null,
      message,
    });
    if (error) {
      return {
        ok: false,
        message: "Could not send right now. Please call or email us directly.",
      };
    }
  }

  return {
    ok: true,
    message: supabase
      ? "Thank you — we will get back to you shortly."
      : "Thank you — your message was received. (Connect Supabase to store inquiries.)",
  };
}
