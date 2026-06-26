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
			className={`absolute flex flex-col items-center shadow shadow-denim-blue border border-denim-blue/40 backdrop-blur-sm rounded-xl p-6 w-2xl bg-ocean-navy/90 ${index === 0 ? "opacity-100" : "opacity-0"}`}
			style={{
				transform:
					index === 0
						? "translateX(0%) scale(1)"
						: "translateX(110%) scale(0.8)",
			}}
		>
			<h3 className="font-inter font-bold text-2xl text-platinum-white text-center">
				{milestone.position}
			</h3>

			<p className="font-inter text-center text-denim-blue text-lg">
				{milestone.company}
			</p>

			<p className="font-jetbrains-mono text-lg text-platinum-white text-center mt-5">
				{milestone.description}
			</p>

			{milestone.logo && (
				<Image
					src={milestone.logo}
					alt={`${milestone.company} logo`}
					width={70}
					height={70}
					className="mt-10"
				/>
			)}
		</div>
	);
}
