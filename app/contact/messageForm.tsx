"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";

interface FormState {
	success: boolean | null;
	message: string;
	error: string;
}

async function submitMessage(
	previousState: FormState,
	formData: FormData,
): Promise<FormState> {
	const firstName = formData.get("firstName");
	const lastName = formData.get("lastName");
	const email = formData.get("email");
	const message = formData.get("message");

	if (!email || !message)
		return {
			success: false,
			message: "",
			error: "Email and message is required!",
		};

	await new Promise((resolve) => setTimeout(resolve, 1600));

	return {
		success: true,
		message: "The message has finished sending",
		error: "",
	};
}

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			className={`mt-10 w-full bg-denim-blue  py-2 rounded-full ${pending ? "grayscale-50" : "grayscale-0"}`}
			disabled={pending}
		>
			{pending ? "Sending message..." : "Send Message"}
		</button>
	);
}

export default function MessageForm() {
	const [state, formAction, isPending] = useActionState(submitMessage, {
		success: null,
		message: "",
		error: "",
	});

	useEffect(() => {
		if (!state.success && !state.error) return;

		if (state.success) console.log(state.message);
		if (!state.success) console.log(state.error);
	}, [state]);

	return (
		<form
			action={formAction}
			className="bg-ocean-navy border border-denim-blue px-3 py-5 w-8/10 rounded-xl"
		>
			{state.error && (
				<p className="mb-3 h-15 flex items-center justify-center text-red-500 text-lg text-center bg-red-500/30">
					{state.error}
				</p>
			)}
			{state.message && (
				<p className="mb-3 h-15 flex items-center justify-center text-green-500 text-lg text-center bg-green-500/30">
					{state.message}
				</p>
			)}
			<div className="flex w-full gap-5">
				<div className="group">
					<label
						htmlFor="firstName"
						className="block font-inter font-bold mb-1 ml-1"
					>
						First Name
					</label>
					<input
						type="firstName"
						name="firstName"
						className="border-b bg-obsidian-black/50 px-2 py-1 border-denim-blue/70 w-full active:border-denim-blue focus:outline-none focus:border-b-3"
					/>
				</div>
				<div className="group">
					<label
						htmlFor="lastName"
						className="block font-inter font-bold mb-1 ml-1"
					>
						Last Name
					</label>
					<input
						type="lastName"
						name="lastName"
						className="border-b bg-obsidian-black/50 px-2 py-1 border-denim-blue/70 w-full active:border-denim-blue focus:outline-none focus:border-b-3"
					/>
				</div>
			</div>
			<label
				htmlFor="email"
				className="block font-inter font-bold mb-1 ml-1 mt-5"
			>
				Email
			</label>
			<input
				type="email"
				name="email"
				className="border-b bg-obsidian-black/50 px-2 py-1 border-denim-blue/70 w-full active:border-denim-blue focus:outline-none focus:border-b-3"
			/>
			<textarea
				name="message"
				id="message"
				placeholder="Write your message here."
				className="border-b bg-obsidian-black/50 border-denim-blue/70 block w-full h-50 wrap-normal mt-5 align-text-top px-2 py-1 focus:outline-none overflow-y-auto focus:border-b-3"
			/>
			<SubmitButton />
		</form>
	);
}
