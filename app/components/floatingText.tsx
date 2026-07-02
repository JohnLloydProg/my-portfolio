"use client";

import type { JSAnimation } from "animejs";
import { animate, random } from "animejs";
import { useEffect, useRef, useState } from "react";

interface FloatingTextProps {
	showText: string;
	children: React.ReactNode;
}

export default function FloatingText({
	showText,
	children,
}: FloatingTextProps) {
	const animationRef = useRef<JSAnimation>(null);
	const textRef = useRef<HTMLHeadingElement>(null);

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!textRef.current) return;

		animationRef.current = animate(textRef.current, {
			y: 30,
			duration: 2000,
			loop: true,
			alternate: true,
			ease: "inOutSine",
			delay: random(100, 1000),
			autoplay: false,
		});

		return () => {
			if (!animationRef.current) return;
			animationRef.current.revert();
		};
	}, []);

	useEffect(() => {
		if (!animationRef.current) return;

		if (isVisible) {
			animationRef.current.revert();
		} else {
			animationRef.current.restart();
		}
	}, [isVisible]);

	return (
		<button
			className={`group hidden lg:block cursor-pointer transition-colors duration-300 border w-100 h-fit relative p-3 rounded ${isVisible ? "bg-ocean-navy/90 border-denim-blue/40 backdrop-blur-sm" : "bg-transparent border-transparent"}`}
			onClick={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
			type="button"
		>
			<h3
				ref={textRef}
				className={`showText text-3xl transition-colors duration-300 font-jetbrains-mono font-bold text-center text-denim-blue group-hover:scale-105`}
			>
				{showText}
			</h3>
			<div
				className={`transition-opacity duration-300 mt-2 ${isVisible ? "opacity-100" : "opacity-0"}`}
			>
				{children}
			</div>
		</button>
	);
}
