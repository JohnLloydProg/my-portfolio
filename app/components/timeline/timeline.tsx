"use client";

import { animate } from "animejs";
import { useEffect, useRef, useState } from "react";
import type { milestone } from "../../interfaces/milestone";
import { useWindowWidth } from "../navBar";
import MilestoneContainer from "./milestoneContainer";
import TimelineDot from "./timelineDot";

const milestones: milestone[] = [
	{
		year: "2019",
		position: "The Beginning",
		company: "Self-Taught",
		description:
			"Started the programming journey and foundational computer science studies. Explored Python and created simple programs.",
	},
	{
		year: "2020",
		position: "Freelance Game Developer",
		company: "Fiverr",
		logo: "/icons/fiverr-logo.svg",
		description:
			"Wanted to gain practical experience, so I started taking on small freelance projects, primarily in game development. It was a great way to learn about other technologies and frameworks, and I was able to build a portfolio of work.",
	},
	{
		year: "2022",
		position: "Freelance Software Developer",
		company: "Upwork",
		logo: "/icons/upwork-logo.svg",
		description:
			"Leveled up my skills and started taking on more complex projects, including web development and software engineering. I learned about different programming languages, frameworks, and tools.",
	},
	{
		year: "2026",
		position: "Full-Stack Developer",
		company: "JAC R&D in IT",
		description:
			"Spearheaded the development of a dance class management system, overseeing both front-end and back-end development. Implemented features such as class scheduling, student management, and payment processing.",
	},
	{
		year: "Now",
		position: "SE Intern",
		company: "Stratpoint",
		logo: "/icons/stratpoint-logo.jpg",
		description:
			"First work as part of a corporate team. Part of my On The Job Training (OJT) for my college degree. Gained experience in working with a team, following best practices, and using version control systems.",
	},
];

export default function StickyTimeline() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [latest, setLatest] = useState(0);

	const windowWidth = useWindowWidth();
	const isDesktop = windowWidth >= 1024;

	const trackRef = useRef<HTMLDivElement>(null);
	const activeLineRef = useRef<HTMLDivElement>(null);
	const dotContainer = useRef<HTMLDivElement>(null);
	const prevProgressRef = useRef(0);
	const scrollTimeoutRef = useRef<NodeJS.Timeout>(null);

	const scrollCall = (index: number) => {
		if (!trackRef.current || window.innerWidth < 1024) return;

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
		window.scrollTo({ top: scroll, behavior: "smooth" });
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.innerWidth < 1024) return;

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
			const cardElement = document.getElementById(`milestone-card-${i}`);
			if (!cardElement) return;

			if (!isDesktop) {
				cardElement.style.transform = "none";
				cardElement.style.opacity = "1";
				cardElement.style.zIndex = "1";
				return;
			}

			let offset = (i - latest) % total;

			if (offset > Math.floor(total / 2)) offset -= total;
			if (offset < -Math.floor(total / 2)) offset += total;

			const isCenter = offset === 0;
			const xPos = offset * 110;
			const scaleSize = isCenter ? 1 : 0.8;
			const fade = isCenter ? 1 : Math.abs(offset) === 1 ? 0.5 : 0;
			const zLevel = 10 - Math.abs(offset);

			cardElement.style.zIndex = zLevel.toString();

			animate(cardElement, {
				translateX: `${xPos}%`,
				scale: scaleSize,
				opacity: fade,
				duration: 600,
				ease: "outExpo",
			});
		});
	}, [latest, isDesktop]);

	return (
		<div ref={trackRef} className="relative w-full lg:h-[400vh] bg-[#0B0C10]">
			<div className="lg:sticky flex flex-col w-full lg:top-24 h-fit lg:min-h-[calc(100lvh-6rem)] py-12 lg:py-0">
				<h2 className="text-4xl lg:text-5xl font-inter font-bold text-platinum-white text-center w-full px-6">
					<span className="text-denim-blue">Career</span> &{" "}
					<span className="text-denim-blue">Experience</span>
				</h2>

				<div className="relative w-full mt-20 overflow-hidden lg:block hidden">
					<div className="absolute top-3 left-0 right-0 h-1 bg-ocean-navy rounded-full z-0" />
					<div
						ref={activeLineRef}
						className="absolute top-3 left-0 h-1 bg-denim-blue rounded-full z-10 transition-all duration-75 ease-out"
					/>
					<div
						ref={dotContainer}
						className="relative z-20 flex justify-between w-full -translate-x-1/2"
					>
						{milestones.map((milestone, index) => (
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
						))}
					</div>
				</div>

				<div className="w-full flex justify-center mt-12 lg:mt-15 lg:overflow-hidden">
					<div className="relative w-full max-w-4xl flex flex-col lg:block items-center lg:h-87.5 gap-8 px-6 lg:px-0">
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
