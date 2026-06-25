"use client";

import { useEffect, useRef, useState } from "react";
import type { milestone } from "../../interfaces/milestone";
import TimelineDot from "./timelineDot";
import { animate } from "animejs";
import Image from "next/image";

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

export default function StickyTimeline() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [latest, setLatest] = useState(0);

	const trackRef = useRef<HTMLDivElement>(null);
	const activeLineRef = useRef<HTMLDivElement>(null);

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
			if (!trackRef.current || !activeLineRef.current) return;

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

			animate(activeLineRef.current, {
				width: `${progress * 100}%`,
				duration: 600,
				ease: "outExpo",
			});
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const total = milestones.length;

		milestones.forEach((_, i) => {
			let offset = (i - latest) % total;

			if (offset > Math.floor(total / 2)) offset -= total;
			if (offset < -Math.floor(total / 2)) offset += total;

			const isCenter = offset === 0;
			const xPos = offset * 110;
			const scaleSize = isCenter ? 1 : 0.8;
			const fade = isCenter ? 1 : Math.abs(offset) === 1 ? 0.5 : 0;
			const zLevel = 10 - Math.abs(offset);

			const cardElement = document.getElementById(`milestone-card-${i}`);
			if (cardElement) {
				cardElement.style.zIndex = zLevel.toString();
			}

			animate(`#milestone-card-${i}`, {
				translateX: `${xPos}%`,
				scale: scaleSize,
				opacity: fade,
				duration: 600,
				ease: "outExpo",
			});
		});
	}, [latest]);

	return (
		<div ref={trackRef} className="relative w-full h-[400vh] bg-[#0B0C10]">
			<div className="sticky flex flex-col w-full top-24 h-[calc(100lvh-6rem)] items-center">
				<h2 className="text-5xl font-inter font-bold text-platinum-white">
					<span className="text-denim-blue">Career</span> &{" "}
					<span className="text-denim-blue">Experience</span>
				</h2>

				<div className="relative w-full max-w-6xl px-4 md:px-8 mt-20">
					<div className="absolute top-3 left-4 md:left-8 right-4 md:right-8 h-1 bg-ocean-navy rounded-full z-0" />

					<div
						ref={activeLineRef}
						className="absolute top-3 left-4 md:left-8 h-1 bg-denim-blue rounded-full z-10 transition-all duration-75 ease-out"
					/>

					<div className="relative z-20 flex justify-between w-full">
						{milestones.map((milestone, index) => {
							return (
								<TimelineDot
									key={milestone.year}
									milestone={milestone}
									scrollProgress={scrollProgress}
									scrollTo={scrollCall}
									index={index}
									milestonesLength={milestones.length}
									latest={latest}
									setLatest={setLatest}
								/>
							);
						})}
					</div>
				</div>
				<div className="overflow-hidden w-full flex justify-center">
					<div className="relative w-full max-w-4xl h-87.5 mt-15 flex justify-center items-center  overflow-x-visible">
						{milestones.map((milestone, index) => (
							<div
								id={`milestone-card-${index}`}
								key={milestone.year}
								className={`absolute flex flex-col items-center shadow shadow-denim-blue border border-denim-blue/40 backdrop-blur-sm rounded-xl p-6 w-2xl bg-ocean-navy/90 ${index === 0 ? "opacity-100" : "opacity-0"}`}
								style={{
									transform:
										index === 0
											? "translateX(0%) scale(1)"
											: "translateX(110%) scale(0.8)",
								}}
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
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
