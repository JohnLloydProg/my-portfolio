import FloatingText from "./components/floatingText";
import HorizontalSlide, { type tech } from "./components/horizontalSlide";
import Image from "next/image";
import ProjectShowcase from "./components/projectShowcase";
import StickyTimeline from "./components/timeline/timeline";
import { TechCard } from "./components/techCard";
import TypewriterText from "./components/typewriterText";

// Hello from John Lloyd

const languages: tech[] = [
	{
		name: "Python",
		img: "/python-logo.svg",
		experience: 3,
	},
	{
		name: "Java",
		img: "/java-logo.svg",
		experience: 2,
	},
	{
		name: "Javascript",
		img: "/javascript-logo.svg",
		experience: 2,
	},
	{
		name: "CSS",
		img: "/css-logo.svg",
		experience: 2,
	},
];

const frameworks: tech[] = [
	{
		name: "Django",
		img: "/django-logo.svg",
		experience: 3,
	},
	{
		name: "Springbot",
		img: "/spring-boot-logo.svg",
		experience: 3,
	},
	{
		name: "Angular",
		img: "/angular-logo.svg",
		experience: 3,
	},
	{
		name: "React",
		img: "/react-logo.svg",
		experience: 3,
	},
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="landing flex flex-col h-lvh w-9/10 items-center justify-center bg-radial from-denim-blue/60 to-60% mb-10">
				<div className="flex items-center justify-center gap-5">
					<div className="flex flex-col items-center gap-10">
						<FloatingText showText="Innovative">
							<p className="text-center font-jetbrains-mono">
								I aim to create innovative solutions that push the boundaries of
								what's possible.
							</p>
						</FloatingText>
						<h1 className="text-6xl w-full font-inter font-bold text-right">
							Software
						</h1>
						<FloatingText showText="Deliver Value">
							<p className="text-center font-jetbrains-mono">
								I strive to deliver value to my clients through high-quality
								high-quality software
							</p>
						</FloatingText>
					</div>
					<div className="min-h-100 min-w-100 relative">
						<Image
							src="/profile.jpg"
							alt="John Lloyd"
							width={370}
							height={370}
							className="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						/>
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-transparent border-6 border-denim-blue rounded-full animate-spin-slow border-dashed"></div>
					</div>
					<div className="flex flex-col items-center gap-10">
						<FloatingText showText="Team Player">
							<p className="text-center font-jetbrains-mono">
								I excel at collaborating with teams to achieve common goals.
							</p>
						</FloatingText>
						<h1 className="text-6xl w-full font-inter font-bold text-left">
							Engineer
						</h1>
						<FloatingText showText="Resilient">
							<p className="text-center font-jetbrains-mono">
								I remain adaptable and persistent in the face of challenges.
							</p>
						</FloatingText>
					</div>
				</div>
				<TypewriterText className="text-3xl font-jetbrains-mono text-platinum-white text-center mt-10 tracking-widest h-7">
					John Lloyd Unida
				</TypewriterText>
			</div>

			<StickyTimeline />

			<div className="projects flex flex-col items-center w-full h-[calc(100lvh-6rem)] mt-10">
				<h2 className="text-5xl font-inter font-bold text-platinum-white">
					Highlight <span className="text-denim-blue">Projects</span>
				</h2>

				<ProjectShowcase />
			</div>

			<div className="projects flex flex-col items-center w-full mb-10 pb-10 mt-20 overflow-hidden">
				<h2 className="text-5xl font-inter font-bold text-platinum-white">
					Tech <span className="text-denim-blue">Stack</span>
				</h2>

				<div className="flex flex-col relative w-full">
					<HorizontalSlide className="mt-10">
						{languages.map((item) => {
							return <TechCard key={item.name} item={item} />;
						})}
					</HorizontalSlide>
					<HorizontalSlide className="mt-5" delay={1000}>
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
