import { promises as fs } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import FloatingText from "./components/floatingText";
import HorizontalSlide, { type tech } from "./components/horizontalSlide";
import ProfileOrbit from "./components/profileOrbit";
import ProjectShowcase from "./components/projectShowcase";
import { TechCard } from "./components/techCard";
import StickyTimeline from "./components/timeline/timeline";
import TypewriterText from "./components/typewriterText";
import type { Project } from "./projects/page";

// Hello from John Lloyd

const languages: tech[] = [
	{
		name: "Python",
		img: "/icons/python-logo.svg",
		experience: 3,
	},
	{
		name: "Java",
		img: "/icons/java-logo.svg",
		experience: 2,
	},
	{
		name: "Javascript",
		img: "/icons/javascript-logo.svg",
		experience: 2,
	},
	{
		name: "CSS",
		img: "/icons/css-logo.svg",
		experience: 2,
	},
];

const frameworks: tech[] = [
	{
		name: "Django",
		img: "/icons/django-logo.svg",
		experience: 3,
	},
	{
		name: "Springbot",
		img: "/icons/spring-boot-logo.svg",
		experience: 3,
	},
	{
		name: "Angular",
		img: "/icons/angular-logo.svg",
		experience: 3,
	},
	{
		name: "React",
		img: "/icons/react-logo.svg",
		experience: 3,
	},
];

export const metadata: Metadata = {
	title: "John Lloyd | Home",
	description:
		"John Lloyd's introduction as a developer. Contains careers, projects, and tech stacks.",
	keywords: [
		"web development",
		"portfolio",
		"Next.js",
		"projects",
		"app development",
	],

	openGraph: {
		title: "Meet John Lloyd!",
		description:
			"John Lloyd's introduction as a developer. Contains careers, projects, and tech stacks.",
		siteName: "John Lloyd | Home",
		type: "website",
	},
};

export default async function Home() {
	//Getting project details
	const filePath = path.join(process.cwd(), "data", "projects.json");
	const fileContent = await fs.readFile(filePath, "utf8");
	const projects: Project[] = JSON.parse(fileContent);
	const highlightedProjects = projects.filter(
		(project) => project.highlight === true,
	);

	for (const project of highlightedProjects) {
		try {
			//Getting images
			const projectImagesPath = path.join(
				process.cwd(),
				"public",
				"projects",
				project.id,
			);
			const files = await fs.readdir(projectImagesPath, "utf8");
			project.imgs = files.map((name) => `/projects/${project.id}/${name}`);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="landing flex flex-col h-lvh w-9/10 items-center justify-center bg-radial from-denim-blue/60 to-60% mb-10">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
				<div className="flex flex-col lg:flex-row items-center justify-center gap-5">
					<div className="flex flex-col items-center gap-10 z-20">
						<FloatingText showText="Innovative">
							<p className="text-center font-jetbrains-mono">
								I aim to create innovative solutions that push the boundaries of
								what's possible.
							</p>
						</FloatingText>
						<h1 className="text-5xl lg:text-7xl w-full font-inter font-bold text-right">
							Software
						</h1>
						<FloatingText showText="Deliver Value">
							<p className="text-center font-jetbrains-mono">
								I strive to deliver value to my clients through high-quality
								high-quality software
							</p>
						</FloatingText>
					</div>
					<ProfileOrbit />
					<div className="flex flex-col items-center gap-10 z-20">
						<FloatingText showText="Team Player">
							<p className="text-center font-jetbrains-mono">
								I excel at collaborating with teams to achieve common goals.
							</p>
						</FloatingText>
						<h1 className="text-5xl lg:text-7xl w-full font-inter font-bold text-left">
							Engineer
						</h1>
						<FloatingText showText="Resilient">
							<p className="text-center font-jetbrains-mono">
								I remain adaptable and persistent in the face of challenges.
							</p>
						</FloatingText>
					</div>
				</div>
				<TypewriterText className="text-xl lg:text-3xl font-jetbrains-mono text-platinum-white text-centerd tracking-widest h-4 lg:h-7 mt-15 lg:mt-0">
					John Lloyd Unida
				</TypewriterText>
			</div>

			<StickyTimeline />

			<div className="projects flex flex-col items-center w-full h-fit min-h-[calc(100lvh-6rem)] gap-10 mt-20">
				<h2 className="text-5xl font-inter font-bold text-platinum-white text-center">
					Highlight <span className="text-denim-blue">Projects</span>
				</h2>

				<ProjectShowcase projects={highlightedProjects} />
			</div>

			<div className="projects flex flex-col items-center w-full mb-10 pb-10 mt-20 overflow-hidden">
				<h2 className="text-5xl font-inter font-bold text-platinum-white">
					Tech <span className="text-denim-blue">Stack</span>
				</h2>

				<div className="flex flex-col relative w-full">
					<HorizontalSlide className="mt-10 h-21">
						{languages.map((item) => {
							return <TechCard key={item.name} item={item} />;
						})}
					</HorizontalSlide>
					<HorizontalSlide className="mt-5 h-21" reverse>
						{frameworks.map((item) => {
							return <TechCard key={item.name} item={item} />;
						})}
					</HorizontalSlide>
					<div className="absolute top-0 left-0 w-full h-full z-10 flex pointer-events-none">
						<div className="w-full h-full bg-linear-to-r from-obsidian-black to-90%"></div>
						<div className="w-full h-full bg-linear-to-l from-obsidian-black to-90%"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
