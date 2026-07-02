"use client";

import { animate, stagger } from "animejs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import type { Project } from "../projects/page";

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
	const [selected, setSelected] = useState<Project>(projects[0]);

	useEffect(() => {
		animate(".stagger-item", {
			y: [30, 0],
			opacity: [0, 1],
			duration: 600,
			ease: "outExpo",
			delay: stagger(150),
		});
	});

	return (
		<div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl h-fit">
			<div className="flex flex-col bg-ocean-navy border border-denim-blue/40 w-full lg:w-70 h-full p-5 items-center lg:rounded-xl">
				<h4 className="font-jetbrains-mono text-platinum-white text-xl text-center">
					Projects
				</h4>
				<ul className="flex flex-col items-center lg:items-start mt-5">
					{projects.map((project) => {
						return (
							<button
								key={project.name}
								type="button"
								className={`cursor-pointer font-inter not-last:mb-3 w-full text-left transition-colors border-l-2 px-4 py-2 ${project === selected ? "border-denim-blue bg-white/5 text-platinum-white" : "border-transparent text-[#8FA0B5] hover:text-platinum-white hover:border-denim-blue hover:bg-white/5"}`}
								onClick={() => setSelected(project)}
							>
								{project.name}
							</button>
						);
					})}
				</ul>
				<Link
					href="/projects"
					className="w-full font-inter font-bold bg-denim-blue rounded-full py-2 text-center mt-5 hover:bg-denim-blue/70 hover:scale-105 transition-all"
				>
					See More →
				</Link>
			</div>
			<div className="showCase w-full h-fit flex items-center justify-center bg-ocean-navy border border-denim-blue/40 lg:rounded-xl p-5">
				<div className="w-full h-fit flex flex-col">
					{selected.imgs && (
						<div className="flex w-full justify-center">
							<Carousel className="w-65/100 stagger-item" opts={{ loop: true }}>
								<CarouselContent>
									{selected.imgs.map((image, index) => (
										<CarouselItem key={image}>
											<div className="relative w-full max-w-2xl aspect-video bg-obsidian-black/50 rounded-xl overflow-hidden">
												<Image
													src={image}
													alt={`${selected.name}-${index}`}
													fill
													className="object-contain"
												/>
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious
									size="icon-lg"
									className="rounded-full bg-obsidian-black/80 hover:bg-denim-blue text-platinum-white border-2 border-platinum-white shadow-lg backdrop-blur-sm transition-all hover:scale-110"
								/>
								<CarouselNext
									size="icon-lg"
									className="rounded-full bg-obsidian-black/80 hover:bg-denim-blue text-platinum-white border-2 border-platinum-white shadow-lg backdrop-blur-sm transition-all hover:scale-110"
								/>
							</Carousel>
						</div>
					)}
					<div className="flex flex-col lg:flex-row mt-5 items-center gap-2 lg:gap-10">
						<h3 className="font-inter font-bold text-2xl text-platinum-white stagger-item">
							{selected.name}
						</h3>
						<div className="flex items-center gap-5">
							{selected.frameworks.map((badge) => (
								<Badge key={badge} className="rounded-full stagger-item">
									{badge}
								</Badge>
							))}
						</div>
					</div>

					<p className="w-full text-justify mt-3 stagger-item">
						{selected.description}
					</p>

					<Button
						size="lg"
						className="mt-5 stagger-item bg-obsidian-black w-20 text-center px-3 py-1.5 rounded-md border border-denim-blue text-denim-blue hover:bg-obsidian-black hover:font-bold hover:scale-105"
						onClick={() => window.open(selected.link, "_blank")}
					>
						View
					</Button>
				</div>
			</div>
		</div>
	);
}
