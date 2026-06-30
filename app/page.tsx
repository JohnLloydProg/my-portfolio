import FloatingText from "./components/floatingText";
import HorizontalSlide, { type tech } from "./components/horizontalSlide";
import ProfileOrbit from "./components/profileOrbit";
import ProjectShowcase from "./components/projectShowcase";
import { TechCard } from "./components/techCard";
import StickyTimeline from "./components/timeline/timeline";
import TypewriterText from "./components/typewriterText";

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

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="landing flex flex-col h-lvh w-9/10 items-center justify-center bg-radial from-denim-blue/60 to-60% mb-10">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
				<div className="flex items-center justify-center gap-5">
					<div className="flex flex-col items-center gap-10 z-20">
						<FloatingText showText="Innovative">
							<p className="text-center font-jetbrains-mono">
								I aim to create innovative solutions that push the boundaries of
								what's possible.
							</p>
						</FloatingText>
						<h1 className="text-7xl w-full font-inter font-bold text-right">
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
						<h1 className="text-7xl w-full font-inter font-bold text-left">
							Engineer
						</h1>
						<FloatingText showText="Resilient">
							<p className="text-center font-jetbrains-mono">
								I remain adaptable and persistent in the face of challenges.
							</p>
						</FloatingText>
					</div>
				</div>
				<TypewriterText className="text-3xl font-jetbrains-mono text-platinum-white text-centerd tracking-widest h-7">
					John Lloyd Unida
				</TypewriterText>
			</div>

			<StickyTimeline />

			<div className="projects flex flex-col items-center w-full h-[calc(100lvh-6rem)] max-h-170 gap-10 mt-20">
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
