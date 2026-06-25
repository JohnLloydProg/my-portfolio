"use client";

import { createTimeline, utils } from "animejs";
import { useEffect, useRef } from "react";

export default function TypewriterText({
	className,
	children,
}: {
	className?: string;
	children: string;
}) {
	const textRef = useRef<HTMLSpanElement>(null);
	const textToType = children;

	useEffect(() => {
		if (!textRef.current) return;

		// We create an object with a starting value of 0.
		// Anime.js will animate this number up to the length of our string.
		const typeState = { characters: 0 };

		// Create a looping timeline
		const timeline = createTimeline({
			loop: true,
		});

		// 1. Typing Forward
		timeline
			.add(typeState, {
				characters: textToType.length,
				modifier: utils.round(0),
				ease: "linear", // Type at a constant speed
				duration: 1500, // Total time to type the full name (1.5s)
				onUpdate: () => {
					if (textRef.current) {
						// Update the text based on the current animated number
						textRef.current.innerHTML = textToType.substring(
							0,
							typeState.characters,
						);
					}
				},
			})
			// 2. Deleting Backward
			.add(typeState, {
				characters: 0,
				modifier: utils.round(0),
				ease: "linear",
				duration: 800, // Delete slightly faster than typing
				delay: 2000, // Wait 2 seconds before starting to delete
				onUpdate: () => {
					if (textRef.current) {
						textRef.current.innerHTML = textToType.substring(
							0,
							typeState.characters,
						);
					}
				},
			});

		return () => {
			timeline.pause(); // Cleanup to prevent memory leaks when the component unmounts
		};
	}, []);

	return (
		// Using Tailwind for styling. Added a blinking cursor element at the end!
		<h1 className={`flex items-center ${className}`}>
			<span ref={textRef}></span>
			{/* The Blinking Cursor */}
			<span className="w-1 h-full ml-1 bg-white animate-pulse"></span>
		</h1>
	);
}
