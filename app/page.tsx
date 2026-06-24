import Image from "next/image";
import FloatingText from "./components/floatingText";
import StickyTimeline from "./components/timeline";
import ProjectShowcase from "./components/projectShowcase";

// Hello from John Lloyd

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
				<h3 className="text-3xl font-jetbrains-mono text-platinum-white text-center mt-10 tracking-widest">
					John Lloyd Unida
				</h3>
			</div>

			<StickyTimeline />

			<div className="projects flex flex-col items-center w-full h-[calc(100lvh-6rem)] pb-5 mt-10">
				<h2 className="text-5xl font-inter font-bold text-platinum-white">
					Highlight <span className="text-denim-blue">Projects</span>
				</h2>

				<ProjectShowcase />
			</div>
		</div>
	);
}
