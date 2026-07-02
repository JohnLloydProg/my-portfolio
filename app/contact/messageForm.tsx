"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitMessage } from "./submitMessage";

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

function FloatingLabel({
	name,
	placeholder,
}: {
	name: string;
	placeholder: string;
}) {
	return (
		<div className="relative w-full h-fit mt-7">
			<input
				type={name}
				name={name}
				className="peer block border-b bg-obsidian-black/50 px-2 py-1 border-denim-blue/70 w-full active:border-denim-blue focus:outline-none focus:border-b-3"
				placeholder=""
			/>
			<label
				htmlFor={name}
				className="pointer-events-none absolute top-0 -translate-y-7 left-2 z-10 text-slate-400 transition-all 
				duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-7 
				peer-focus:font-bold peer-focus:text-platinum-white uppercase"
			>
				{placeholder}
			</label>
		</div>
	);
}

export default function MessageForm() {
	const [state, formAction] = useActionState(submitMessage, {
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
			className="bg-ocean-navy border border-denim-blue px-3 py-5 w-full rounded-xl"
		>
			{state.error && (
				<p className="mb-3 py-3 flex items-center justify-center text-red-500 text-lg text-center bg-red-500/30">
					{state.error}
				</p>
			)}
			{state.message && (
				<p className="mb-3 py-3 flex items-center justify-center text-green-500 text-lg text-center bg-green-500/30">
					{state.message}
				</p>
			)}
			<div className="flex w-full gap-5 mb-10">
				<FloatingLabel name="firstName" placeholder="First Name" />
				<FloatingLabel name="lastName" placeholder="Last Name" />
			</div>
			<FloatingLabel name="email" placeholder="Email" />
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
