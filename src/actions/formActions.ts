"use server";

import { Resend } from "resend";

const resendInstance = new Resend(process.env.RESEND_API_KEY);

export const handleSendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const messageText = formData.get("message");

  if (senderEmail === null || senderEmail === "")
    return { status: 400, message: "Email field empty" };
  if (messageText === null || messageText === "")
    return { status: 400, message: "Message field empty" };

  console.log(senderEmail);
  console.log(messageText);

  const fullText = `email from <${senderEmail}>: 
	
	${messageText.toString().trimStart()}
	`;

  console.log(fullText);

  resendInstance.emails.send({
    from: "Contact form <onboarding@resend.dev>",
    to: "tefloon@gmail.com",
    subject: `Contact from portfolio <${senderEmail}>`,
    text: fullText as string,
  });

  return { status: 200, message: "Message sent" };
};
