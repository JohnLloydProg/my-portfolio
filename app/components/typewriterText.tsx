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

		const typeState = { characters: 0 };

		const timeline = createTimeline({
			loop: true,
		});

		timeline
			.add(typeState, {
				characters: textToType.length,
				modifier: utils.round(0),
				ease: "linear",
				duration: 1500,
				onUpdate: () => {
					if (textRef.current) {
						textRef.current.innerHTML = textToType.substring(
							0,
							typeState.characters,
						);
					}
				},
			})
			.add(typeState, {
				characters: 0,
				modifier: utils.round(0),
				ease: "linear",
				duration: 800,
				delay: 2000,
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
			timeline.pause();
		};
	}, [textToType.length, textToType.substring]);

	return (
		<h1 className={`flex items-center ${className}`}>
			<span ref={textRef}></span>
			<span className="w-1 h-full ml-1 bg-white animate-pulse"></span>
		</h1>
	);
}
