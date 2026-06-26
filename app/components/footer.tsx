import Image from "next/image";

export default function Footer() {
	return (
		<div className="flex flex-col bg-ocean-navy py-5 px-10">
			<h2 className="font-inter font-bold text-3xl">
				John Lloyd <span className="text-denim-blue">Unida</span>
			</h2>
			<div className="flex justify-between">
				<div className="flex flex-col max-w-md">
					<div className="flex gap-2 mt-2">
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
					<p className="text-platinum-white mt-10">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum at
						ab animi quisquam quis vel cupiditate est! Facere distinctio eum
						corporis sed ipsa ducimus maxime? Voluptatem quam dignissimos
						dolorum eaque.
					</p>
				</div>

				<div className="flex gap-5">
					<div className="flex flex-row justify-between items-start gap-8 max-w-6xl mx-auto">
						<div className="flex flex-col gap-4 w-30">
							<h3 className="font-inter text-denim-blue text-lg font-semibold tracking-widest">
								Home
							</h3>
							<ul className="flex flex-col gap-3 text-[#8FA0B5] text-base">
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Landing
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Career
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Projects
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Tech Stack
									</a>
								</li>
							</ul>
						</div>

						<div className="flex flex-col gap-4 w-30">
							<h3 className="font-inter text-denim-blue text-lg font-semibold tracking-widest">
								About Me
							</h3>
							<ul className="flex flex-col gap-3 text-[#8FA0B5] text-base">
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Landing
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Career
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Projects
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Tech Stack
									</a>
								</li>
							</ul>
						</div>

						<div className="flex flex-col gap-4 w-30">
							<h3 className="font-inter text-denim-blue text-lg font-semibold tracking-widest">
								Projects
							</h3>
							<ul className="flex flex-col gap-3 text-[#8FA0B5] text-base">
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Landing
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Career
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Projects
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Tech Stack
									</a>
								</li>
							</ul>
						</div>

						<div className="flex flex-col gap-4 w-30">
							<h3 className="font-inter text-denim-blue text-lg font-semibold tracking-widest">
								Contact
							</h3>
							<ul className="flex flex-col gap-3 text-[#8FA0B5] text-base">
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Landing
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Career
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Projects
									</a>
								</li>
								<li>
									<a
										href="/"
										className="transition-all border-l-2 hover:text-platinum-white hover:bg-white/5 px-2 py-1 hover:border-denim-blue hover:pl-3"
									>
										Tech Stack
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
