"use client";

import { animate, type JSAnimation } from "animejs";
import { useEffect, useRef } from "react";

export interface tech {
	name: string;
	img: string;
	experience: number;
}

export default function HorizontalSlide({
	className = "",
	delay = 0,
	children,
}: {
	className: string;
	delay?: number;
	children?: React.ReactNode;
}) {
	const divRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<JSAnimation>(null);

	useEffect(() => {
		if (!divRef.current) return;

		animationRef.current = animate(divRef.current, {
			x: ["-50%", "0%"],
			duration: 15000,
			ease: "linear",
			delay: delay,
			loop: true,
		});

		return () => {
			if (!animationRef.current) return;
			animationRef.current.revert();
		};
	});

	return (
		<div className={`relative w-full ${className}`}>
			<div
				role="dialog"
				ref={divRef}
				className="flex w-max"
				onMouseEnter={() => animationRef.current?.pause()}
				onMouseLeave={() => animationRef.current?.play()}
			>
				<div className="item-container flex gap-10 pr-10">{children}</div>
				<div className="item-container flex gap-10 pr-10">{children}</div>
			</div>

			<div className="absolute top-0 left-0 w-full h-full z-10 flex pointer-events-none">
				<div className="w-full h-full bg-linear-to-r from-obsidian-black to-90%"></div>
				<div className="w-full h-full bg-linear-to-l from-obsidian-black to-90%"></div>
			</div>
		</div>
	);
}
