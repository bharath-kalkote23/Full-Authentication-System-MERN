'use server';

/**
 * @fileOverview A password reset request flow.
 *
 * - passwordResetRequest - A function that handles the password reset request process.
 * - PasswordResetRequestInput - The input type for the passwordResetRequest function.
 * - PasswordResetRequestOutput - The return type for the passwordResetRequest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PasswordResetRequestInputSchema = z.object({
  email: z.string().email().describe('The email address of the user requesting a password reset.'),
});
export type PasswordResetRequestInput = z.infer<typeof PasswordResetRequestInputSchema>;

const PasswordResetRequestOutputSchema = z.object({
  otp: z.string().describe('The OTP sent to the user to verify their email address.'),
});
export type PasswordResetRequestOutput = z.infer<typeof PasswordResetRequestOutputSchema>;

export async function passwordResetRequest(input: PasswordResetRequestInput): Promise<PasswordResetRequestOutput> {
  return passwordResetRequestFlow(input);
}

const prompt = ai.definePrompt({
  name: 'passwordResetRequestPrompt',
  input: {schema: PasswordResetRequestInputSchema},
  output: {schema: PasswordResetRequestOutputSchema},
  prompt: `You are an authentication system that generates OTPs for password reset requests.

  Generate a random 6-digit OTP and return it in the output.
  Do not include any text besides the OTP code.
  The email address is: {{{email}}}`,
});

const passwordResetRequestFlow = ai.defineFlow(
  {
    name: 'passwordResetRequestFlow',
    inputSchema: PasswordResetRequestInputSchema,
    outputSchema: PasswordResetRequestOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
