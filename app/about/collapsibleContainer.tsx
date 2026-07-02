"use client";

import Image from "next/image";
import { useState } from "react";

export default function CollapsibleContainer() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<button
			type="button"
			className="group w-full max-w-4xl bg-ocean-navy border border-denim-blue/40 shadow-xs rounded-xl p-4 shadow-denim-blue mt-10"
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className={`text-center ${isOpen ? "mb-10" : "mb-0"}`}>
				<h2 className="text-3xl font-semibold tracking-tight font-inter mb-2">
					Scholarship Leadership Camp {isOpen ? "▲" : "▼"}
				</h2>
				<p className="text-denim-blue text-xl font-bold tracking-widest">
					DOST-SEI
				</p>
			</div>

			<div
				className={`flex-col lg:flex-row items-center justify-between gap-10 ${isOpen ? "flex" : "hidden"} transition-all duration-300`}
			>
				<div className="w-full lg:w-1/2 flex flex-col space-y-8 text-gray-300 text-center leading-relaxed">
					<p>
						I was one of the luck ones to attend the Scholarship Leadership Camp
						by DOST-SEI. There we recalled and practiced the skills, behavior,
						and mindset a leader should have.
					</p>
					<p>
						Another purpose of the camp was to remind us the important role we
						have as future professionals in our industries.
					</p>
				</div>

				<div className="w-full lg:w-1/2 aspect-video flex justify-center relative">
					<Image
						src="/slc.jpg"
						fill
						alt="DOST-SEI Scholars Leadership Camp Group Photo"
						className="object-contain rounded-xl bg-obsidian-black/50"
					/>
				</div>
			</div>
		</button>
	);
}
