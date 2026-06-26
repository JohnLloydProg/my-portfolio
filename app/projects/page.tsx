"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ProjectDashboard from "./sideBar";

// --- INTERFACES ---
export interface Project {
	id: string;
	name: string;
	framework: string;
	description: string;
}

// --- MOCK DATA ---
const FILTERS: string[] = [
	"All",
	"React.js",
	"Next.js",
	"Node.js",
	"React Native",
];

const PROJECTS_DATA: Project[] = [
	{
		id: "p1",
		name: "E-Commerce Dashboard",
		framework: "React.js",
		description: "Full-stack dashboard for managing store inventory.",
	},
	{
		id: "p2",
		name: "Anime Tracker",
		framework: "Next.js",
		description: "Track your favorite shows with real-time updates.",
	},
	{
		id: "p3",
		name: "Auth Microservice",
		framework: "Node.js",
		description: "Secure JWT authentication service.",
	},
	{
		id: "p4",
		name: "Payment Gateway API",
		framework: "Node.js",
		description: "Stripe integration for subscription processing.",
	},
	{
		id: "p5",
		name: "Fitness App",
		framework: "React Native",
		description: "Workout tracker and meal planner.",
	},
	{
		id: "p6",
		name: "Portfolio V2",
		framework: "Next.js",
		description: "Personal portfolio with interactive animations.",
	},
];

export default function Projects() {
	const [activeFilter, setActiveFilter] = useState<string>("All");
	const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
	const [selectedProject, setSelectedProject] = useState<Project>(
		PROJECTS_DATA[0],
	);

	const filteredProjects =
		activeFilter === "All"
			? PROJECTS_DATA
			: PROJECTS_DATA.filter((project) => project.framework === activeFilter);

	const handleProjectClick = useCallback((project: Project) => {
		setSelectedProject(project);

		// Scroll the main content area to the matching section
		const targetSection = sectionRefs.current[project.id];
		if (targetSection) {
			targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, []);

	useEffect(() => {
		if (
			!filteredProjects.includes(selectedProject) &&
			filteredProjects.length > 0
		) {
			setSelectedProject(filteredProjects[0]);
		}
	}, [activeFilter, filteredProjects, selectedProject]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const visibleProjectId = entry.target.id;
						const project = PROJECTS_DATA.find(
							(p) => p.id === visibleProjectId,
						);
						if (project) {
							setSelectedProject(project);
						}
					}
				});
			},
			{
				root: null,
				rootMargin: "-20% 0px -60% 0px", // Triggers when element is in the middle of the viewport
				threshold: 0,
			},
		);

		// Observe all project sections currently in the filtered list
		filteredProjects.forEach((project) => {
			const el = sectionRefs.current[project.id];
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [filteredProjects]);

	return (
		<div className="flex">
			<ProjectDashboard
				projects={PROJECTS_DATA}
				allFilters={FILTERS}
				activeFilter={activeFilter}
				selectedProject={selectedProject}
				onFilterClick={setActiveFilter}
				onProjectClick={handleProjectClick}
			/>
			<main className="flex-1 h-full overflow-y-auto scroll-smooth py-8 px-12 custom-scrollbar">
				<div className="max-w-4xl mx-auto flex flex-col gap-32 pb-64">
					{filteredProjects.map((project) => (
						<div
							key={`detail-${project.id}`}
							id={project.id}
							ref={(el) => {
								sectionRefs.current[project.id] = el;
							}}
							className="min-h-[60vh] flex flex-col justify-center scroll-mt-14"
						>
							{/* --- THIS IS WHERE YOU PUT CUSTOM CONTENT --- */}

							{project.id === "p1" && (
								<div className="p1-custom-layout">
									<h1 className="text-5xl font-bold mb-6 text-green-400">
										Custom Title for P1!
									</h1>
									<p>{project.description}</p>
									<div className="grid grid-cols-2 gap-4 mt-8">
										<div className="h-40 bg-slate-800 rounded-xl">Graph 1</div>
										<div className="h-40 bg-slate-800 rounded-xl">Graph 2</div>
									</div>
								</div>
							)}

							{project.id === "p2" && (
								<div className="p2-custom-layout">
									<h1 className="text-5xl font-bold mb-6 text-purple-500">
										Anime Tracker Setup
									</h1>
									<p className="italic text-gray-400">
										A completely different layout.
									</p>
									<div className="h-96 bg-slate-800 mt-8 rounded-full flex items-center justify-center">
										Custom Round Graphic
									</div>
								</div>
							)}

							{/* Fallback for projects that don't have custom TSX yet */}
							{project.id !== "p1" && project.id !== "p2" && (
								<div>
									<span className="text-sm font-semibold text-blue-500 tracking-wider uppercase mb-2">
										{project.framework}
									</span>
									<h1 className="text-5xl font-bold text-white mb-6">
										{project.name}
									</h1>
									<p className="text-xl text-gray-400 leading-relaxed mb-8">
										{project.description}
									</p>
								</div>
							)}
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
