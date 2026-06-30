"use client";

import { animate, stagger } from "animejs";
import Image from "next/image";
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

interface project {
	title: string;
	description: string;
	techs: string[];
	imgs: string[];
	link: string;
}

const projects: project[] = [
	{
		title: "State of Dance Website",
		description: "Testing",
		techs: ["Django", "Angular"],
		imgs: ["/next.svg", "/globe.svg", "/file.svg"],
		link: "https://google.com/",
	},
	{
		title: "State of Dance Website 1",
		description: "Testing",
		techs: ["Django", "Angular"],
		imgs: ["/next.svg", "/globe.svg", "/file.svg"],
		link: "https://google.com/",
	},
	{
		title: "State of Dance Website 2",
		description: "Testing",
		techs: ["Django", "Angular"],
		imgs: ["/next.svg", "/globe.svg", "/file.svg"],
		link: "https://google.com/",
	},
	{
		title: "State of Dance Website 3",
		description: "Testing",
		techs: ["Django", "Angular"],
		imgs: ["/next.svg", "/globe.svg", "/file.svg"],
		link: "https://google.com/",
	},
];

export default function ProjectShowcase() {
	const [selected, setSelected] = useState<project | null>(null);

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
		<div className="flex gap-10 w-full max-w-6xl h-full">
			<div className="flex flex-col bg-ocean-navy border border-denim-blue/40 w-70 h-full p-5 items-center rounded-xl">
				<h4 className="font-jetbrains-mono text-platinum-white text-xl text-center">
					Projects
				</h4>
				<ul className="flex flex-col items-center mt-5">
					{projects.map((project) => {
						return (
							<button
								key={project.title}
								type="button"
								className={`cursor-pointer font-inter not-last:mb-3 text-left transition-colors border-l-2 px-4 py-2 ${project === selected ? "border-denim-blue bg-white/5 text-platinum-white" : "border-transparent text-[#8FA0B5] hover:text-platinum-white hover:border-denim-blue hover:bg-white/5"}`}
								onClick={() => setSelected(project)}
							>
								{project.title}
							</button>
						);
					})}
				</ul>
			</div>
			<div className="showCase w-full h-full flex items-center justify-center bg-ocean-navy border border-denim-blue/40 rounded-xl p-5">
				{selected === null && (
					<div className="text-center">
						<h3 className="font-bold font-jetbrains-mono text-denim-blue text-xl animate-pulse">
							No Selected Project
						</h3>
						<p className="text-platinum-white font-jetbrains-mono text mt-2">
							No selected project. Please select a project to view.
						</p>
					</div>
				)}

				{selected !== null && (
					<div className="w-full h-fit flex flex-col">
						<div className="flex w-full justify-center">
							<Carousel className="w-65/100 stagger-item" opts={{ loop: true }}>
								<CarouselContent>
									{selected.imgs.map((image, index) => (
										<CarouselItem key={image}>
											<div className="relative w-full max-w-2xl aspect-video bg-amber-400 rounded-xl">
												<Image
													src={image}
													alt={`${selected.title}-${index}`}
													fill
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
						<div className="flex mt-5 items-center gap-10">
							<h3 className="font-inter font-bold text-2xl text-platinum-white stagger-item">
								{selected.title}
							</h3>
							<div className="flex items-center gap-5">
								{selected.techs.map((badge) => (
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
				)}
			</div>
		</div>
	);
}
