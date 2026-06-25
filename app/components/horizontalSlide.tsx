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
	pauseOnHover = true,
	reverse = false,
	children,
}: {
	className?: string;
	delay?: number;
	pauseOnHover?: boolean;
	reverse?: boolean;
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
			reversed: reverse,
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
				className="flex w-max h-full"
				onMouseEnter={() => {
					pauseOnHover ? animationRef.current?.pause() : "";
				}}
				onMouseLeave={() => {
					pauseOnHover ? animationRef.current?.play() : "";
				}}
			>
				<div className="item-container h-full flex gap-10 pr-10 items-center">
					{children}
				</div>
				<div className="item-container h-full flex gap-10 pr-10 items-center">
					{children}
				</div>
			</div>
		</div>
	);
}
