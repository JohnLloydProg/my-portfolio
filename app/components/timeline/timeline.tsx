"use client";

import { useEffect, useRef, useState } from "react";
import type { milestone } from "../../interfaces/milestone";
import TimelineDot from "./timelineDot";
import { animate } from "animejs";
import MilestoneContainer from "./milestoneContainer";

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
	const dotContainer = useRef<HTMLDivElement>(null);
	const prevProgressRef = useRef(0);
	const scrollTimeoutRef = useRef<NodeJS.Timeout>(null);

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
			if (!trackRef.current || !activeLineRef.current || !dotContainer.current)
				return;

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

			if (progress >= 1) {
				animate(activeLineRef.current, {
					width: "100%",
					duration: 800,
					ease: "outElastic(1, 0.8)",
				});
				return;
			}

			const delta = progress - prevProgressRef.current;
			prevProgressRef.current = progress;

			const stretchAmount = 50 + -delta * 800;
			const clampedStretch = Math.max(20, Math.min(80, stretchAmount));

			animate(activeLineRef.current, {
				width: `${clampedStretch}%`,
				duration: 150,
				ease: "outQuad",
			});

			animate(dotContainer.current, {
				left: `${(1 - progress) * 100}%`,
				duration: 600,
				ease: "outExpo",
			});

			if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

			scrollTimeoutRef.current = setTimeout(() => {
				if (!activeLineRef.current) return;

				animate(activeLineRef.current, {
					width: "50%",
					duration: 800,
					ease: "outElastic(1, 0.8)",
				});
			}, 150);
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
			<div className="sticky flex flex-col w-full top-24 h-fit">
				<h2 className="text-5xl font-inter font-bold text-platinum-white text-center w-full">
					<span className="text-denim-blue">Career</span> &{" "}
					<span className="text-denim-blue">Experience</span>
				</h2>

				<div className="relative w-full mt-20 overflow-hidden">
					<div className="absolute top-3 left-0 right-0 h-1 bg-ocean-navy rounded-full z-0" />

					<div
						ref={activeLineRef}
						className="absolute top-3 left-0 h-1 bg-denim-blue rounded-full z-10 transition-all duration-75 ease-out"
					/>

					<div
						ref={dotContainer}
						className="relative z-20 flex justify-between w-full -translate-x-1/2"
					>
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
							<MilestoneContainer
								key={milestone.year}
								milestone={milestone}
								index={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
