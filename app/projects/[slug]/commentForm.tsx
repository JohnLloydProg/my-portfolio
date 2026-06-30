"use client";

import { useActionState, useEffect } from "react";
import { submitComment } from "./submitComment";

export interface ProjComment {
	date: Date;
	content: string;
}

export default function CommentForm({
	projectId,
	comments,
}: {
	projectId: string;
	comments: ProjComment[];
}) {
	const [state, formAction] = useActionState(
		submitComment.bind("", projectId).bind([], comments),
		{
			success: null,
			message: "",
			error: "",
		},
	);

	useEffect(() => {
		if (!state.success && !state.error) return;

		if (state.success) console.log(state.message);
		if (!state.success) console.log(state.error);
	}, [state]);

	return (
		<form
			action={formAction}
			className="flex flex-col bg-ocean-navy p-5 w-full max-w-4xl mx-auto rounded-xl mt-10"
		>
			<h3 className="text-4xl font-bold font-inter">Give me a feedback!</h3>
			<p className="mt-5">
				Don't be afraid to share your thoughts, suggestions, and criticisms.
				Your feedback helps me improve as a developer.
			</p>
			<textarea
				name="comment"
				id="comment"
				placeholder="Write your comment here."
				className="focus:outline-none px-3 py-2 h-40 overflow-y-auto bg-obsidian-black/40 mt-8 border-b border-denim-blue focus:border-b-3"
				maxLength={150}
			/>

			<button
				type="submit"
				className="mr-0 mt-10 bg-denim-blue px-4 py-2 rounded-full ml-auto"
			>
				Submit Comment
			</button>
		</form>
	);
}
