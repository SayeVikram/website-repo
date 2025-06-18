"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction({ name, email, content }) {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ['sayevikramkarthikeyan@gmail.com'],
      subject: `Name: ${name} Email: ${email}`,
      html: `<p>${content}</p>`,
    });

    
    return { success: true, data };

  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
}
