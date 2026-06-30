"use server";

import { promises as fs } from "node:fs";
import path from "node:path";
import type { FormState } from "@/app/interfaces/formState";
import type { ProjComment } from "./commentForm";

export async function submitComment(
	projectId: string,
	comments: ProjComment[],
	_previousState: FormState,
	formData: FormData,
): Promise<FormState> {
	const comment = formData.get("comment");
	if (!comment) return { success: false, error: "No comment was provided." };

	const commentsPath = path.join(
		process.cwd(),
		"data",
		"comments",
		`${projectId}.json`,
	);
	comments.push({ date: new Date(), content: comment.toString() });
	await fs.writeFile(commentsPath, JSON.stringify(comments));

	return { success: true, message: "The comment was sent properly." };
}
