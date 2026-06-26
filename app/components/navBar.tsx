"use client";

import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function NavBar() {
	const currentPath = usePathname();

	useEffect(() => {
		console.log("Current path:", currentPath);
	}, [currentPath]);

	return (
		<header className="flex z-50 h-14 w-full items-center justify-between p-5 sticky top-0 left-0">
			<Link
				href="/"
				className="h-10 w-10 rounded-full bg-denim-blue flex items-center justify-center"
			>
				<p className="text-xl font-inter font-bold text-platinum-white">JL</p>
			</Link>
			<nav className="bg-ocean-navy w-120 border p-1.5 border-denim-blue rounded-full">
				<ul className="flex w-full justify-between">
					<Link
						href="/"
						className={`py-1 px-4 border font-jetbrains-mono transition-all duration-300 ${currentPath === "/" ? "bg-denim-blue/50 text-platinum-white rounded-full border-denim-blue" : "text-platinum-white border-transparent hover:text-denim-blue"}`}
					>
						Home
					</Link>
					<Link
						href="/about"
						className={`py-1 px-4 border font-jetbrains-mono transition-all duration-300 ${currentPath === "/about" ? "bg-denim-blue/50 text-platinum-white rounded-full border-denim-blue" : "text-platinum-white border-transparent hover:text-denim-blue"}`}
					>
						About
					</Link>
					<Link
						href="/projects"
						className={`py-1 px-4 border font-jetbrains-mono transition-all duration-300 ${currentPath === "/projects" ? "bg-denim-blue/50 text-platinum-white rounded-full border-denim-blue" : "text-platinum-white border-transparent hover:text-denim-blue"}`}
					>
						Projects
					</Link>
					<Link
						href="/contact"
						className={`py-1 px-4 border font-jetbrains-mono transition-all duration-300 ${currentPath === "/contact" ? "bg-denim-blue/50 text-platinum-white rounded-full border-denim-blue" : "text-platinum-white border-transparent hover:text-denim-blue"}`}
					>
						Contact
					</Link>
				</ul>
			</nav>
			<button
				className="bg-denim-blue font-jetbrains-mono text-obsidian-black px-4 py-2 rounded-full"
				type="button"
			>
				<p>Resume</p>
			</button>
		</header>
	);
}
