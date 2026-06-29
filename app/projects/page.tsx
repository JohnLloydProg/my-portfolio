import ProjectCard from "./projectCard";

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

export const PROJECTS_DATA: Project[] = [
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

export default async function Projects() {
	return (
		<div className="flex flex-col items-center min-h-lvh">
			<h1 className="font-inter text-5xl font-bold mt-10">
				Explore My Projects
			</h1>
			<div className="flex flex-wrap gap-10 max-w-6xl justify-center mt-20">
				{PROJECTS_DATA.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}
