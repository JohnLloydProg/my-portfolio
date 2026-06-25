import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { milestone } from "../../interfaces/milestone";

export default function TimelineDot({
	milestone,
	scrollProgress,
	scrollTo,
	index,
	milestonesLength,
	latest,
	setLatest,
}: {
	milestone: milestone;
	scrollProgress: number;
	scrollTo: (index: number) => void;
	index: number;
	milestonesLength: number;
	latest: number;
	setLatest: Dispatch<SetStateAction<number>>;
}) {
	const activationPoint = index / (milestonesLength - 1);

	const isActive = scrollProgress >= activationPoint;

	useEffect(() => {
		if (isActive && index > latest) {
			setLatest(index);
		} else if (!isActive && index === latest) {
			setLatest(index - 1);
		}
	});

	return (
		<div
			key={milestone.year}
			className="flex flex-col items-center w-32 -ml-16 first:ml-0 last:-mr-16"
		>
			<button
				className={`cursor-pointer w-7 h-7 rounded-full border-4 shrink-0 transition-all duration-300 ${
					isActive
						? "bg-denim-blue border-obsidian-black scale-110 shadow-[0_0_15px_rgba(75,107,251,0.5)]"
						: "bg-ocean-navy border-obsidian-black"
				}`}
				onClick={() => scrollTo(index)}
				type="button"
			/>

			<div
				className={`mt-4 font-jetbrains-mono text-lg font-bold transition-colors duration-300 ${
					isActive ? "text-platinum-white" : "text-[#8FA0B5]"
				}`}
			>
				{milestone.year}
			</div>
		</div>
	);
}
