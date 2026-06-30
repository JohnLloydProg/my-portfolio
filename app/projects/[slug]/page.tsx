import { promises as fs } from "node:fs";
import path from "node:path";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import type { Project } from "../page";

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const filePath = path.join(process.cwd(), "data", "projects.json");
	const fileContent = await fs.readFile(filePath, "utf8");
	const data: Project[] = JSON.parse(fileContent);
	const project = data.find((project) => project.id === slug);
	if (!project) return <h1>Not found!</h1>;

	try {
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

	await new Promise((resolve) => setTimeout(resolve, 2000));

	return (
		<div className="flex justify-center">
			<div className="min-h-lvh flex flex-col w-full max-w-6xl mt-10 mb-10">
				{project.imgs && (
					<Carousel
						className=" w-full md:w-65/100 mx-auto"
						opts={{ loop: true }}
					>
						<CarouselContent>
							{project.imgs.map((image, index) => (
								<CarouselItem key={image}>
									<div className="relative w-full aspect-video rounded-xl overflow-clip">
										<Image src={image} alt={`${project.name}-${index}`} fill />
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
				)}
				<p className="text-sm font-semibold text-denim-blue tracking-wider uppercase mb-2 mt-10">
					{project.framework}
				</p>
				<div className="flex">
					<h1 className="text-5xl font-bold font-inter mb-6">{project.name}</h1>
				</div>
				<p className="text-xl leading-relaxed">{project.description}</p>
			</div>
		</div>
	);
}
