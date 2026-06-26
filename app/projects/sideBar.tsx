"use client";

import { animate } from "animejs";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Project } from "./page";

interface ProjectSidebarProps {
	projects: Project[];
	allFilters: string[];
	activeFilter: string;
	selectedProject: Project;
	onFilterClick: (filter: string) => void;
	onProjectClick: (project: Project) => void;
}

export default function ProjectDashboard({
	projects,
	allFilters,
	activeFilter,
	selectedProject,
	onFilterClick,
	onProjectClick,
}: ProjectSidebarProps) {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const scrollPosition = useRef<number>(0);

	const filteredProjects =
		activeFilter === "All"
			? projects
			: projects.filter((project) => project.framework === activeFilter);

	useEffect(() => {
		if (
			!filteredProjects.includes(selectedProject) &&
			filteredProjects.length > 0
		) {
			onProjectClick(filteredProjects[0]);
		}
	}, [filteredProjects, selectedProject, onProjectClick]);

	useEffect(() => {
		const wrapper = wrapperRef.current;
		if (!wrapper) return;

		const handleWheel = (e: WheelEvent) => {
			e.preventDefault();

			const containerHeight =
				wrapper.parentElement?.clientHeight || window.innerHeight;
			const maxScroll = Math.max(0, wrapper.scrollHeight - containerHeight);

			scrollPosition.current += e.deltaY;
			scrollPosition.current = Math.max(
				0,
				Math.min(scrollPosition.current, maxScroll),
			);

			animate(wrapper, {
				y: -scrollPosition.current,
				duration: 150,
				ease: "outQuad",
			});
		};

		wrapper.addEventListener("wheel", handleWheel, { passive: false });

		return () => {
			wrapper.removeEventListener("wheel", handleWheel);
		};
	}, []);

	return (
		<div className="flex h-screen text-platinum-white sticky top-14">
			<aside className="w-64 min-w-[16rem] overflow-y-auto py-8 px-6 custom-scrollbar">
				<h2 className="text-xl font-bold text-white mb-8 tracking-wide font-inter">
					My Projects
				</h2>

				<nav className="flex flex-col gap-2">
					{allFilters.map((filter) => {
						const isActive = activeFilter === filter;
						return (
							<button
								type="button"
								key={filter}
								onClick={() => {
									if (!wrapperRef.current) return;
									scrollPosition.current = 0;
									onFilterClick(filter);
									animate(wrapperRef.current, {
										y: -scrollPosition.current,
										duration: 150,
										ease: "outQuad",
									});
								}}
								className={`w-full text-left border-l-2 px-3 py-2 transition-all text-sm font-medium ${
									isActive
										? "border-denim-blue text-platinum-white bg-denim-blue/20"
										: "border-transparent hover:border-denim-blue text-gray-400 hover:text-platinum-white hover:bg-white/5"
								}`}
							>
								{filter}
							</button>
						);
					})}
				</nav>
			</aside>

			<div className="h-full w-70 overflow-hidden">
				<div
					ref={wrapperRef}
					className="flex flex-col gap-6 w-full cursor-pointer"
				>
					{filteredProjects.map((project) => (
						<div
							key={project.id}
							className={`w-70 group border bg-ocean-navy rounded-xs overflow-hidden ${selectedProject === project ? "border-denim-blue" : "border-transparent hover:border-denim-blue"}`}
						>
							<p
								className={`ml-2 my-1 group-hover:text-denim-blue ${selectedProject === project ? "text-denim-blue" : "text-platinum-white"}`}
							>
								{project.name}
							</p>
							<Image
								onClick={() => onProjectClick(project)}
								src="/projects/state-of-dance.png"
								width={280}
								height={280}
								alt="next"
								className={`w-full aspect-video object-contain ${selectedProject === project ? "grayscale-0" : "grayscale group-hover:grayscale-0"}`}
							/>
						</div>
					))}
				</div>

				{filteredProjects.length === 0 && (
					<div className="text-center py-20 text-gray-500">
						No projects found for {activeFilter}.
					</div>
				)}
			</div>
		</div>
	);
}
