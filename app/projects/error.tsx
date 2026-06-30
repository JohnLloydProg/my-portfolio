"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import MessageForm from "../contact/messageForm";

interface ErrorProps {
	error: Error;
	reset: () => void;
}

export default function ErrorFallback({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div className="flex items-center justify-center h-[calc(100lvh-3.5rem)]">
			<div className="flex gap-10 max-w-5xl items-center">
				<div className="w-full h-fit px-3 py-4">
					<h1 className="font-inter font-bold text-3xl text-red-500">
						Uh oh! An error occured: {error.name}
					</h1>
					<p className="mx-2.5 mt-5 text-platinum-white/70">{error.message}</p>
					<p className="mt-5">
						I'm sorry you have faced an error. You can help me resolve this
						problem by telling me what happened before the error. Thank you so
						much!
					</p>
					<Button
						variant="default"
						size="lg"
						type="button"
						onClick={() => reset()}
						className="mt-10 rounded-md w-25"
					>
						Try Again
					</Button>
				</div>
				<MessageForm />
			</div>
		</div>
	);
}
