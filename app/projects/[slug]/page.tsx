import { PROJECTS_DATA } from "../page";

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = PROJECTS_DATA.find((project) => project.id === slug);
	if (!project) return <h1>Not found!</h1>;

	return (
		<div className="flex items-center justify-center">
			<div
				key={`detail-${project.id}`}
				id={project.id}
				className="min-h-lvh flex flex-col w-full max-w-6xl mt-20"
			>
				{project.id === "p1" && (
					<div className="p1-custom-layout">
						<h1 className="text-5xl font-bold mb-6 text-green-400">
							Custom Title for P1!
						</h1>
						<p>{project.description}</p>
						<div className="grid grid-cols-2 gap-4 mt-8">
							<div className="h-40 bg-slate-800 rounded-xl">Graph 1</div>
							<div className="h-40 bg-slate-800 rounded-xl">Graph 2</div>
						</div>
					</div>
				)}

				{project.id === "p2" && (
					<div className="p2-custom-layout">
						<h1 className="text-5xl font-bold mb-6 text-purple-500">
							Anime Tracker Setup
						</h1>
						<p className="italic text-gray-400">
							A completely different layout.
						</p>
						<div className="h-96 bg-slate-800 mt-8 rounded-full flex items-center justify-center">
							Custom Round Graphic
						</div>
					</div>
				)}

				{project.id !== "p1" && project.id !== "p2" && (
					<div>
						<span className="text-sm font-semibold text-blue-500 tracking-wider uppercase mb-2">
							{project.framework}
						</span>
						<h1 className="text-5xl font-bold text-white mb-6">
							{project.name}
						</h1>
						<p className="text-xl text-gray-400 leading-relaxed mb-8">
							{project.description}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
