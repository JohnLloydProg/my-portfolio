import path from "path";
import ProjectCard from "./projectCard";
import { promises as fs } from "fs";

// --- INTERFACES ---
export interface Project {
	id: string;
	name: string;
	framework: string;
	description: string;
	imgs?: string[];
}

// --- MOCK DATA ---
const FILTERS: string[] = [
	"All",
	"React.js",
	"Next.js",
	"Node.js",
	"React Native",
];

export default async function Projects() {
	const filePath = path.join(process.cwd(), "data", "projects.json");
	const fileContent = await fs.readFile(filePath, "utf8");
	const data: Project[] = JSON.parse(fileContent);

	await new Promise((resolve) => setTimeout(resolve, 1000));

	return (
		<div className="flex flex-col items-center min-h-lvh">
			<h1 className="font-inter text-5xl font-bold mt-10">
				Explore <span className="text-pastel-blue">My</span>{" "}
				<span className="text-denim-blue">Projects</span>
			</h1>
			<div className="flex flex-wrap gap-10 max-w-6xl justify-center mt-20">
				{data.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}
