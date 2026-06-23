"use client";

import { useEffect, useState } from "react";

interface FloatingTextProps {
	showText: string;
	children: React.ReactNode;
}

export default function FloatingText({
	showText,
	children,
}: FloatingTextProps) {
	const [isVisible, setIsVisible] = useState(false);
	const [delay, setDelay] = useState(0);

	useEffect(() => {
		setDelay(Math.floor(Math.random() * 1000));
	}, []);

	return (
		<button
			className={`cursor-pointer transition-colors duration-300 border block w-100 h-fit relative p-3 rounded ${isVisible ? "bg-ocean-navy/90 border-denim-blue/40 backdrop-blur-sm" : "bg-transparent border-transparent"}`}
			onClick={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
			type="button"
		>
			<h3
				className={`text-3xl transition-colors duration-300 font-jetbrains-mono font-bold text-center ${isVisible ? "text-denim-blue" : "text-denim-blue/80 animate-float hover:text-denim-blue"}`}
				style={{ animationDelay: `${delay}ms` }}
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
