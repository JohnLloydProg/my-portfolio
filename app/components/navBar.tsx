"use client";

import { usePathname } from "next/dist/client/components/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
	window.addEventListener("resize", callback);
	return () => window.removeEventListener("resize", callback);
}

export function useWindowWidth() {
	return useSyncExternalStore(
		subscribe,
		() => window.innerWidth, // Client side value
		() => 0, // Server side fallback value (for SSR/Next.js)
	);
}

function SmallNavBar() {
	const [showMenu, setShowMenu] = useState(false);
	const currentPath = usePathname();

	return (
		<header className="fixed flex z-50 h-14 w-full p-5 top-0 left-0">
			<button
				type="button"
				className="ml-auto mr-0 bg-denim-blue rounded-full p-1 w-9 h-9 hover:bg-denim-blue/80 transition-all"
				onClick={() => setShowMenu(!showMenu)}
			>
				<Image
					src="/menu.svg"
					alt="Menu"
					width={30}
					height={30}
					className="object-contain w-full h-full"
				/>
			</button>
			<div
				className={`absolute left-0 top-0 h-lvh w-lvw flex-col items-center justify-center bg-ocean-navy  ${showMenu ? "flex" : "hidden"}`}
			>
				<h1 className="text-3xl font-bold text-platinum-white text-center">
					John <span className="text-denim-blue">Lloyd</span>
				</h1>
				<nav className="mt-10">
					<ul className="flex flex-col w-full gap-5 items-center h-full">
						<Link
							href="/"
							className={`py-1 px-4 border font-jetbrains-mono transition-all duration-300 ${currentPath === "/" ? "bg-denim-blue/50 text-platinum-white rounded-full border-denim-blue" : "text-platinum-white border-transparent hover:text-denim-blue"}`}
							onClick={() => setShowMenu(false)}
						>
							Home
						</Link>
						<Link
							href="/about"
							className={`py-1 px-4 border font-jetbrains-mono transition-all duration-300 ${currentPath === "/about" ? "bg-denim-blue/50 text-platinum-white rounded-full border-denim-blue" : "text-platinum-white border-transparent hover:text-denim-blue"}`}
							onClick={() => setShowMenu(false)}
						>
							About
						</Link>
						<Link
							href="/projects"
							className={`py-1 px-4 border font-jetbrains-mono transition-all duration-300 ${currentPath === "/projects" ? "bg-denim-blue/50 text-platinum-white rounded-full border-denim-blue" : "text-platinum-white border-transparent hover:text-denim-blue"}`}
							onClick={() => setShowMenu(false)}
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className={`py-1 px-4 border font-jetbrains-mono transition-all duration-300 ${currentPath === "/contact" ? "bg-denim-blue/50 text-platinum-white rounded-full border-denim-blue" : "text-platinum-white border-transparent hover:text-denim-blue"}`}
							onClick={() => setShowMenu(false)}
						>
							Contact
						</Link>
					</ul>
				</nav>

				<button
					type="button"
					className="bg-denim-blue rounded-full p-1 w-9 h-9 mt-10"
					onClick={() => setShowMenu(false)}
				>
					<Image
						src="/close.svg"
						alt="Close"
						width={30}
						height={30}
						className="object-contain w-full h-full"
					/>
				</button>
			</div>
		</header>
	);
}

export default function NavBar() {
	const width = useWindowWidth();
	const currentPath = usePathname();

	if (width < 1000) return <SmallNavBar />;
	return (
		<header className="flex z-50 h-14 w-full items-center justify-between p-5 sticky top-0 left-0">
			<Link
				href="/"
				className="h-10 w-10 rounded-full bg-denim-blue items-center flex justify-center"
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
			<a
				href="/Resume.pdf"
				download="Resume.pdf"
				className="bg-denim-blue font-jetbrains-mono text-obsidian-black px-4 py-2 rounded-full hover:bg-denim-blue/80 transition-all"
				type="button"
			>
				<p>Resume</p>
			</a>
		</header>
	);
}
