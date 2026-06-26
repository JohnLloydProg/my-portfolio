"use client";

import { animate } from "animejs";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ProfileOrbit() {
	const orbitTrack1 = useRef(null);
	const orbitTrack2 = useRef(null);

	useEffect(() => {
		if (!orbitTrack1.current || !orbitTrack2.current) return;
		animate(orbitTrack1.current, {
			rotate: "360deg",
			duration: 6000,
			ease: "linear",
			loop: true,
		});

		animate(orbitTrack2.current, {
			rotate: "-360deg",
			duration: 8000,
			ease: "linear",
			loop: true,
		});
	}, []);

	return (
		<div className="relative flex items-center justify-center w-full h-full">
			<div className="relative z-10 w-64 h-64 rounded-full border-4 border-denim-blue  overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.5)]">
				<Image
					src="/profile.jpg"
					alt="Profile"
					width={370}
					height={370}
					className="object-contain"
				/>
			</div>

			<div
				ref={orbitTrack1}
				className="absolute w-95 h-95 rounded-full border-2 border-dashed border-denim-blue/50"
			>
				<div className="absolute top-0 left-1/2 w-6 h-6 bg-denim-blue rounded-full shadow-[0_0_15px_#4b6bfb] transform -translate-x-1/2 -translate-y-1/2"></div>
			</div>

			<div
				ref={orbitTrack2}
				className="absolute w-125 h-125 rounded-full border-2 border-dashed border-denim-blue/50"
			>
				<div className="absolute bottom-0 left-1/2 w-8 h-8 transform -translate-x-1/2 translate-y-1/2 bg-denim-blue rounded-full shadow-[0_0_15px_#4b6bfb]"></div>
				<div className="absolute top-1/2 left-0 w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 bg-platinum-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
			</div>
		</div>
	);
}
