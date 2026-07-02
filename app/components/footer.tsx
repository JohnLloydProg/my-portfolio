import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="flex flex-col bg-ocean-navy py-5 px-10">
			<h2 className="font-inter text-center lg:text-left font-bold text-3xl">
				John Lloyd <span className="text-denim-blue">Unida</span>
			</h2>
			<div className="flex flex-col lg:flex-row justify-between">
				<div className="flex flex-col lg:max-w-md">
					<div className="flex justify-center lg:justify-start gap-2 mt-2">
						<a
							href="https://www.facebook.com/johnlloyd.yunida"
							target="_blank"
							rel="noreferrer noopener"
						>
							<Image
								src="/icons/facebook-logo.svg"
								alt="facebook logo"
								width={30}
								height={30}
							/>
						</a>
						<a
							href="https://www.instagram.com/its_unids/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<Image
								src="/icons/instagram-logo.svg"
								alt="instagram logo"
								width={30}
								height={30}
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/john-lloyd-unida-138952219/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<Image
								src="/icons/linkedin-logo.svg"
								alt="linked logo"
								width={30}
								height={30}
							/>
						</a>
						<a
							href="https://github.com/JohnLloydProg"
							target="_blank"
							rel="noreferrer noopener"
						>
							<Image
								src="/icons/github-logo.svg"
								alt="github logo"
								width={30}
								height={30}
								className="fill-platinum-white"
							/>
						</a>
					</div>
					<p className="text-platinum-white mt-10 lg:text-left text-center italic">
						"Great developers are made by solving challenges they initially felt
						unqualified for."
					</p>
				</div>

				<div className="flex flex-wrap justify-between items-start gap-8 max-w-6xl mt-10 lg:mt-0">
					<div className="flex flex-col gap-4 w-30">
						<Link
							href="/"
							className="font-inter text-denim-blue text-lg font-semibold tracking-widest"
						>
							Home
						</Link>
						<ul className="flex flex-col gap-3 text-[#8FA0B5] text-base">
							<li>
								<Link
									href="/#timeline"
									className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
								>
									Career
								</Link>
							</li>
							<li>
								<Link
									href="/#highlight"
									className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="/#techStack"
									className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
								>
									Tech Stack
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-4 w-30">
						<Link
							href="/about"
							className="font-inter text-denim-blue text-lg font-semibold tracking-widest"
						>
							About Me
						</Link>
						<ul className="flex flex-col gap-3 text-[#8FA0B5] text-base">
							<li>
								<Link
									href="/about#story"
									className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
								>
									Story
								</Link>
							</li>
							<li>
								<Link
									href="/about#hobbies"
									className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
								>
									Hobbies
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-4 w-30">
						<Link
							href="/projects"
							className="font-inter text-denim-blue text-lg font-semibold tracking-widest"
						>
							Projects
						</Link>
						<ul className="flex flex-col gap-3 text-[#8FA0B5] text-base">
							<li>
								<Link
									href="/projects?filter=Django"
									className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
								>
									Django
								</Link>
							</li>
							<li>
								<Link
									href="/projects?filter=Angular"
									className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
								>
									Angular
								</Link>
							</li>
							<li>
								<Link
									href="/projects?filter=Kivy"
									className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
								>
									Kivy
								</Link>
							</li>
							<li>
								<Link
									href="/projects?filter=Firebase"
									className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
								>
									Firebase
								</Link>
							</li>
						</ul>
					</div>

					<div className="flex flex-col gap-4 w-30">
						<Link
							href="/contact"
							className="font-inter text-denim-blue text-lg font-semibold tracking-widest"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
