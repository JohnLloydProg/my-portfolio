import { promises as fs } from "node:fs";
import path from "node:path";
import Link from "next/link";
import ProjectCard from "./projectCard";

// --- INTERFACES ---
export interface Project {
	id: string;
	name: string;
	frameworks: string[];
	description: string;
	thumbnail: string;
	imgs?: string[];
	link: string;
	highlight?: boolean;
}

// --- MOCK DATA ---
const _FILTERS: string[] = [
	"All",
	"React.js",
	"Next.js",
	"Node.js",
	"React Native",
];

export default async function Projects({
	searchParams,
}: {
	searchParams: Promise<{ filter?: string }>;
}) {
	const { filter } = await searchParams;

	const filePath = path.join(process.cwd(), "data", "projects.json");
	const fileContent = await fs.readFile(filePath, "utf8");
	const data: Project[] = JSON.parse(fileContent);
	const filters = new Set<string>();

	for (const project of data) {
		for (const framework of project.frameworks) filters.add(framework);
	}

	const projects = data.filter((project) => {
		if (filter && filter !== "All") {
			return project.frameworks.includes(filter);
		}
		return true;
	});

	await new Promise((resolve) => setTimeout(resolve, 1000));

	return (
		<div className="flex flex-col items-center min-h-lvh h-fit">
			<h1 className="font-inter text-5xl font-bold mt-10 text-center">
				Explore <span className="text-pastel-blue">My</span>{" "}
				<span className="text-denim-blue">Projects</span>
			</h1>
			<div className="flex flex-wrap gap-5 mt-10 w-full max-w-4xl justify-center">
				{filters.values().map((filterOption) => (
					<Link
						key={filterOption}
						href={`/projects?filter=${filterOption}`}
						className={`border border-denim-blue rounded-full px-2 py-1 transition-all hover:bg-denim-blue ${filterOption === filter ? "bg-denim-blue" : "bg-transparent"}`}
					>
						{filterOption}
					</Link>
				))}
			</div>
			<div className="flex flex-wrap gap-10 max-w-6xl justify-center mt-10 mb-10">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}
