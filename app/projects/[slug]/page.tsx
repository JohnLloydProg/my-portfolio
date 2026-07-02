import { promises as fs } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import type { Project } from "../page";
import CommentForm, { type ProjComment } from "./commentForm";

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	let comments: ProjComment[] = [];
	const { slug } = await params;

	//Getting project details
	const filePath = path.join(process.cwd(), "data", "projects.json");
	const fileContent = await fs.readFile(filePath, "utf8");
	const data: Project[] = JSON.parse(fileContent);
	const project = data.find((project) => project.id === slug);
	if (!project) return notFound();

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

	try {
		//Getting comments
		const commentsPath = path.join(
			process.cwd(),
			"data",
			"comments",
			`${project.id}.json`,
		);
		const file = await fs.readFile(commentsPath, "utf8");
		comments = JSON.parse(file);
		comments = comments.map((comment) => {
			comment.date = new Date(comment.date);
			return comment;
		});
	} catch (error) {
		console.log(error);
	}

	await new Promise((resolve) => setTimeout(resolve, 1000));

	return (
		<div className="flex justify-center">
			<div className="min-h-lvh flex flex-col w-full max-w-6xl mt-10 mb-10">
				{project.imgs && (
					<Carousel className="w-7/10 lg:w-full mx-auto" opts={{ loop: true }}>
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
				<p className="font-semibold text-denim-blue tracking-wider uppercase mb-2 mt-10 text-center lg:text-left">
					{project.framework}
				</p>
				<div className="flex flex-col lg:flex-row justify-between items-center mb-6">
					<h1 className="text-5xl lg:text-7xl font-bold font-inter text-center lg:text-left">
						{project.name}
					</h1>
					<a
						href="https://google.com/"
						className="bg-denim-blue px-3 py-1 w-full lg:w-20 text-center rounded-full mt-5 lg:mt-0"
						target="_blank"
						rel="noopener noreferrer"
					>
						View
					</a>
				</div>
				<p className="text-lg leading-relaxed text-center lg:text-left">
					{project.description}
				</p>

				<div className="flex flex-col w-full mt-10">
					<h3 className="text-4xl font-bold font-inter text-center lg:text-left">
						Recent Comments
					</h3>
					<div className="flex flex-wrap justify-center lg:justify-start gap-10 mt-5">
						{comments.map((comment) => (
							<div
								key={comment.date.getTime()}
								className="bg-ocean-navy/70 w-80 px-4 py-2 border border-denim-blue h-fit"
							>
								<span className="text-denim-blue text-sm">
									{comment.date.toDateString()}
								</span>
								<p className="text w-full wrap-break-word whitespace-pre-wrap">
									{comment.content}
								</p>
							</div>
						))}
					</div>
				</div>
				<CommentForm projectId={project.id} comments={comments} />
			</div>
		</div>
	);
}
