import Image from "next/image";
import { useEffect, useRef } from "react";
import type { milestone } from "../interfaces/milestone";
import { animate, JSAnimation, spring } from "animejs";

export default function MilestoneContainer({
	milestone,
	active,
}: {
	milestone: milestone;
	active: boolean;
}) {
	const divRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<JSAnimation>(null);

	useEffect(() => {
		if (!divRef.current) return;

		animationRef.current = animate(divRef.current, {
			y: 200,
			duration: 400,
			reversed: true,
			ease: "inOutSine",
			opacity: 0,
			scale: 0.5,
			autoplay: true,
		});
		return () => {
			if (!animationRef.current) return;
			animationRef.current.revert();
		};
	}, [active]);

	return (
		<div
			ref={divRef}
			className={`absolute flex flex-col items-center top-0 left-1/2 shadow shadow-denim-blue border border-denim-blue/40 backdrop-blur-sm rounded-xl -translate-x-1/2 p-4 w-2xl bg-ocean-navy/90 ${active ? "block" : "hidden"}`}
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
				></Image>
			)}
		</div>
	);
}
