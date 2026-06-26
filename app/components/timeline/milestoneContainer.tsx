import type { milestone } from "@/app/interfaces/milestone";
import Image from "next/image";

export default function MilestoneContainer({
	milestone,
	index,
}: {
	milestone: milestone;
	index: number;
}) {
	return (
		<div
			id={`milestone-card-${index}`}
			className={`group absolute flex flex-col items-start shadow-2xl shadow-black/40 border border-denim-blue/30 backdrop-blur-md rounded-2xl p-8 w-2xl bg-linear-to-br from-ocean-navy/95 to-[#0B0C10]/95 overflow-hidden transition-all ${
				index === 0 ? "opacity-100" : "opacity-0"
			}`}
			style={{
				transform:
					index === 0
						? "translateX(0%) scale(1)"
						: "translateX(110%) scale(0.8)",
			}}
		>
			<div className="absolute -top-24 -right-24 w-48 h-48 bg-denim-blue/10 blur-[50px] rounded-full pointer-events-none" />

			<div className="flex justify-between items-start w-full mb-6 relative z-10">
				<div>
					<h3 className="font-inter font-extrabold text-3xl text-platinum-white tracking-tight">
						{milestone.position}
					</h3>

					<div className="inline-block mt-3 px-3 py-1 bg-denim-blue/10 border border-denim-blue/30 rounded-full">
						<p className="font-inter font-medium text-denim-blue text-sm uppercase tracking-wider">
							{milestone.company}
						</p>
					</div>
				</div>

				{milestone.logo && (
					<div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-denim-blue/10 transition-colors duration-300">
						<Image
							src={milestone.logo}
							alt={`${milestone.company} logo`}
							width={45}
							height={45}
							className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
						/>
					</div>
				)}
			</div>

			<p className="font-jetbrains-mono text-lg text-platinum-white/80 leading-relaxed relative z-10">
				{milestone.description}
			</p>
		</div>
	);
}
