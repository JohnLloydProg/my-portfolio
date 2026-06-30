"use server";

import { Resend } from "resend";
import type { FormState } from "../interfaces/formState";
import { EmailTemplate } from "./emailTemplate";

const resend = new Resend(process.env.RESEND_API);

export async function submitMessage(
	_previousState: FormState,
	formData: FormData,
): Promise<FormState> {
	const firstName = formData.get("firstName");
	const lastName = formData.get("lastName");
	const email = formData.get("email");
	const message = formData.get("message");

	if (!email || !message || !firstName || !lastName)
		return {
			success: false,
			error: "Email and message is required!",
		};

	try {
		const { error } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: ["johnlloydunida0@gmail.com"],
			subject: `Portfolio Website Message ${new Date().toDateString()}`,
			react: EmailTemplate({
				firstName: firstName.toString(),
				lastName: lastName.toString(),
				email: email.toString(),
				message: message.toString(),
			}),
		});
		if (error) {
			return { success: false, error: error.message };
		}
	} catch (error) {
		return { success: false, error: `Unknown error occured: ${error}` };
	}

	return {
		success: true,
		message: "The message has finished sending",
	};
}
