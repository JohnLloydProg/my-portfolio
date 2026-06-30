import Image from "next/image";
import Link from "next/link";
import type { Project } from "./page";

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Link
			href={`/projects/${project.id}`}
			key={project.id}
			className="cursor-pointer w-70 group border bg-ocean-navy rounded-xs overflow-hidden border-transparent hover:border-denim-blue hover:scale-110 transition-all"
		>
			<p className="ml-2 my-1 group-hover:text-denim-blue text-platinum-white">
				{project.name}
			</p>
			<Image
				src="/projects/state-of-dance.png"
				width={280}
				height={280}
				alt="next"
				className="w-full aspect-video object-contain grayscale group-hover:grayscale-0"
			/>
		</Link>
	);
}
