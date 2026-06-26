import Image from "next/image";
import type { tech } from "./horizontalSlide";

export function TechCard({ item }: { item: tech }) {
	return (
		<div className="group hover:scale-105 transition-transform flex bg-ocean-navy hover:border hover:border-denim-blue min-w-70 items-center px-4 py-3 gap-5">
			<Image
				src={item.img}
				alt="Tech Icon"
				width={60}
				height={60}
				className="grayscale group-hover:grayscale-0 aspect-square object-contain group-hover:rotate-12 transition-all"
			/>
			<div className="flex flex-col">
				<h3 className="font-inter font-bold text-2xl">{item.name}</h3>
				<p className="text-denim-blue">{item.experience}+ years</p>
			</div>
		</div>
	);
}
