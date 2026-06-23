"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface milestone {
	year: string;
	position: string;
	company: string;
	logo?: string;
	description: string;
}

const milestones: milestone[] = [
	{
		year: "2021",
		position: "The Beginning",
		company: "testing",
		logo: "/globe.svg",
		description:
			"Started the programming journey and foundational computer science studies.",
	},
	{
		year: "2023",
		position: "Full-Stack Foundations",
		company: "testing",
		description:
			"Began building web applications and exploring database architectures.",
	},
	{
		year: "2024",
		position: "System Architecture",
		company: "testing",
		logo: "/globe.svg",
		description:
			"Expanded into distributed systems, containerization, and advanced API design.",
	},
	{
		year: "2025",
		position: "Facility Management App",
		company: "testing",
		description:
			"Designed and developed a shared study space management system with room reservation logic.",
	},
	{
		year: "2026",
		position: "Academic Research",
		company: "testing",
		logo: "/globe.svg",
		description:
			"Architecting closed-system transit graph simulations and epidemic interventions.",
	},
	{
		year: "Now",
		position: "Freelance Developer",
		company: "testing",
		logo: "/globe.svg",
		description:
			"Delivering full-stack client solutions and building scalable web infrastructure.",
	},
];

function timelineDot(
	milestone: milestone,
	scrollProgress: number,
	scrollTo: (index: number) => void,
	index: number,
) {
	const activationPoint = index / (milestones.length - 1);

	const isActive = scrollProgress >= activationPoint;

	return (
		<div
			key={milestone.year}
			className="flex flex-col items-center w-32 -ml-16 first:ml-0 last:-mr-16"
		>
			<button
				className={`cursor-pointer w-7 h-7 rounded-full border-4 shrink-0 transition-all duration-300 ${
					isActive
						? "bg-denim-blue border-obsidian-black scale-110 shadow-[0_0_15px_rgba(75,107,251,0.5)]"
						: "bg-ocean-navy border-obsidian-black"
				}`}
				onClick={() => scrollTo(index)}
				type="button"
			/>

			<div
				className={`mt-4 font-jetbrains-mono text-lg font-bold transition-colors duration-300 ${
					isActive ? "text-platinum-white" : "text-[#8FA0B5]"
				}`}
			>
				{milestone.year}
			</div>
		</div>
	);
}

export default function StickyTimeline() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [latest, setLatest] = useState(0);

	const trackRef = useRef(null);

	const scrollCall = (index: number) => {
		if (!trackRef.current) return;

		const activationPoint = index / (milestones.length - 1) + 0.01;
		const rect = trackRef.current.getBoundingClientRect();
		const windowHeight = window.innerHeight;

		const totalScrollable = rect.height - windowHeight;

		const trackAbsoluteTop = window.scrollY + rect.top;

		if (totalScrollable <= 0) {
			setScrollProgress(1);
			return;
		}

		const offsetTop = 96;
		const scroll =
			activationPoint * totalScrollable + trackAbsoluteTop - offsetTop;
		scrollTo({ top: scroll, behavior: "smooth" });
	};

	useEffect(() => {
		const handleScroll = () => {
			if (!trackRef.current) return;

			const rect = trackRef.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			const totalScrollable = rect.height - windowHeight;

			if (totalScrollable <= 0) {
				setScrollProgress(1);
				return;
			}

			const offsetTop = 96;
			let progress = (-rect.top + offsetTop) / totalScrollable;

			progress = Math.max(0, Math.min(1, progress));
			setScrollProgress(progress);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div ref={trackRef} className="relative w-full h-[400vh] bg-[#0B0C10]">
			<div className="sticky flex flex-col w-full top-24 h-[calc(100lvh-8rem)] items-center">
				<h2 className="text-5xl font-inter font-bold text-platinum-white">
					<span className="text-denim-blue">Career</span> &{" "}
					<span className="text-denim-blue">Experience</span>
				</h2>

				<div className="relative w-full max-w-5xl px-4 md:px-8 mt-20">
					<div className="absolute top-3 left-4 md:left-8 right-4 md:right-8 h-1 bg-ocean-navy rounded-full z-0" />

					<div
						className="absolute top-3 left-4 md:left-8 h-1 bg-denim-blue rounded-full z-10 transition-all duration-75 ease-out"
						style={{ width: `calc(${scrollProgress * 100}% - 2rem)` }}
					/>

					<div className="relative z-20 flex justify-between w-full">
						{milestones.map((milestone, index) =>
							timelineDot(milestone, scrollProgress, scrollCall, index),
						)}
					</div>
				</div>

				<div className="relative mt-10">
					{milestones.map((milestone, index) => {
						const activationPoint = index / (milestones.length - 1);

						const isActive = scrollProgress >= activationPoint;
						if (isActive && index > latest) {
							setLatest(index);
							console.log("activate");
						} else if (!isActive && index === latest) {
							setLatest(index - 1);
						}

						return (
							<div
								key={milestone.year}
								className={`absolute flex flex-col items-center top-0 left-1/2 shadow shadow-denim-blue border border-denim-blue/40 backdrop-blur-sm rounded-xl -translate-x-1/2 p-4 w-2xl bg-ocean-navy/90 z-${index} ${latest === index ? "block animate-slide-in" : "hidden"}`}
							>
								<h3 className="font-inter font-bold text-2xl text-platinum-white text-center">
									{milestone.position}
								</h3>
								<p className="font-inter text-center text-denim-blue text-lg">
									{milestone.company}
								</p>

								<p className="font-jetbrains-mono text-lg text-platinum-white text-center mt-5">
									{milestone.description}
								</p>

								{milestone.logo && (
									<Image
										src={milestone.logo}
										alt={`${milestone.company} logo`}
										width={70}
										height={70}
										className="mt-10"
									></Image>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
