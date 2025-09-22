"use server";

import { passwordResetRequest } from "@/ai/flows/password-reset-request";
import { z } from "zod";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export async function requestPasswordReset(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.email?.[0],
      message: null,
    };
  }

  try {
    // In a real app, you'd find the user and send them an email with a reset link/OTP.
    // The GenAI flow simulates OTP generation.
    const result = await passwordResetRequest({ email: validatedFields.data.email });
    console.log(`OTP generated for ${validatedFields.data.email}: ${result.otp}`);

    return { 
      error: null,
      message: "If an account with that email exists, a password reset OTP has been sent." 
    };
  } catch (error) {
    console.error("Password reset request failed:", error);
    return {
      error: "An unexpected error occurred. Please try again later.",
      message: null,
    };
  }
}
