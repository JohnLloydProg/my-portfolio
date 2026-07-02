import Image from "next/image";
import HorizontalSlide from "../components/horizontalSlide";
import CollapsibleContainer from "./collapsibleContainer";

interface hobby {
	name: string;
	img: string;
}

const hobbies: hobby[] = [
	{
		name: "Badminton",
		img: "/hobbies/badminton.jpg",
	},
	{
		name: "Gym",
		img: "/hobbies/gym.jpg",
	},
	{
		name: "Anime",
		img: "/hobbies/anime.jpg",
	},
	{
		name: "Games",
		img: "/hobbies/games.jpg",
	},
	{
		name: "Basketball",
		img: "/hobbies/basketball.jpg",
	},
	{
		name: "Cafe",
		img: "/hobbies/cafe.jpg",
	},
];

export default function About() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex flex-col lg:flex-row items-center gap-5 w-full bg-radial from-denim-blue/60 to-60% max-w-6xl h-fit min-h-lvh">
				<div className="flex flex-col gap-6 text-center md:text-right w-full">
					<div>
						<h1 className="text-inter text-4xl md:text-5xl font-bold tracking-tight text-platinum-white">
							John Lloyd
						</h1>
						<h2 className="text-inter text-4xl md:text-5xl font-bold tracking-tight text-denim-blue mt-1">
							Unida
						</h2>
					</div>

					<div className="text-[#8FA0B5] space-y-1 text-lg">
						<p>Meycauayan, Bulacan 📍</p>
						<p>Boot up: Sep 27, 2004</p>
					</div>
				</div>
				<div className="h-full w-2/3 lg:w-full max-h-100 max-w-100 relative p-3">
					<Image
						src="/profile.jpg"
						alt="John Lloyd"
						width={370}
						height={370}
						className="h-full w-full object-contain rounded-full"
					/>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-transparent border-6 border-denim-blue rounded-full animate-spin-slow border-dashed"></div>
				</div>
				<div className="flex flex-col space-y-6 text-center lg:text-left w-full">
					<p className="text-lg">Glad to see you here!</p>
					<p className="leading-relaxed">
						I'm an aspiring software engineer looking to develop all types of
						systems and applications.
					</p>
					<p className="leading-relaxed">
						I already briefly introduced myself at the home page. If you want to
						know more about me,
					</p>
					<p className="text-denim-blue font-semibold mt-2 tracking-wide block animate-bounce">
						Scroll down for more
					</p>
				</div>
			</div>
			<div className="relative w-full h-40 overflow-hidden">
				<div className="absolute bg-denim-blue/60 w-full rotate-1 h-8 top-6.5" />
				<HorizontalSlide
					className="absolute bg-denim-blue -rotate-1 h-8 top-13"
					pauseOnHover={false}
					reverse
				>
					<p className="text-lg font-bold tracking-wider">Proactive</p>
					<p className="text-lg font-bold tracking-wider">Flexible</p>
					<p className="text-lg font-bold tracking-wider">Problem Solving</p>
					<p className="text-lg font-bold tracking-wider">Adaptive</p>
					<p className="text-lg font-bold tracking-wider">Critical Thinking</p>
					<p className="text-lg font-bold tracking-wider">Collaborative</p>
				</HorizontalSlide>
			</div>
			<div
				id="story"
				className="events flex flex-col w-full max-w-6xl items-center"
			>
				<h2 className="text-5xl font-inter font-bold text-platinum-white text-center">
					<span className="text-denim-blue">Events</span> &{" "}
					<span className="text-denim-blue">Story</span>
				</h2>
				<div className="flex flex-col lg:flex-row w-full mt-15 gap-10">
					<div className="flex flex-col text-center lg:text-right w-full my-auto">
						<p>06/15/26 - Now</p>
						<h3 className="w-full font-inter font-bold text-3xl">
							Software Engineer Intern
						</h3>
						<p className="text-denim-blue text-xl">Stratpoint</p>
					</div>
					<div className="w-1 bg-denim-blue hidden lg:block" />
					<div className="h-1 bg-denim-blue w-2/3 mx-auto lg:hidden" />
					<div className="flex flex-col text-center lg:text-left w-full gap-5 my-auto">
						<p>
							I attended Startpoint’s internship program as part of my OJT
							requirements at college. There I worked on various projects under
							the guidance of Stratpoint employees and mentors.
						</p>
						<p>
							Here I learned how to work and function in a corporate setup. I
							tried to adapt their routine and gain productive habits and
							skills.
						</p>
					</div>
				</div>
				<CollapsibleContainer />

				<div className="flex flex-col-reverse lg:flex-row w-full mt-10 gap-10">
					<div className="flex flex-col text-center lg:text-right w-full gap-5 my-auto">
						<p>
							This project was a freelance commission for a start up company. I
							worked on their first ever project with a business client. We were
							a team of two, one UI/UX and me, the full stack.
						</p>
						<p>
							This was my first ever project with a business and I’m glad it
							went well. I learned how to be adaptive and flexible in this
							project.
						</p>
					</div>
					<div className="w-1 bg-denim-blue hidden lg:block" />
					<div className="h-1 bg-denim-blue w-2/3 mx-auto lg:hidden" />
					<div className="flex flex-col text-center lg:text-left w-full my-auto">
						<p>02/01/26 - 04/20/26</p>
						<h3 className="w-full font-inter font-bold text-3xl">
							Full Stack Developer
						</h3>
						<p className="text-denim-blue text-xl">JAC R&D</p>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row w-full mt-10 gap-10">
					<div className="flex flex-col text-center lg:text-right w-full my-auto">
						<p>01/10/22 - Now</p>
						<h3 className="w-full font-inter font-bold text-3xl">
							Freelance Software Developer
						</h3>
						<p className="text-denim-blue text-xl">Upwork</p>
					</div>
					<div className="w-1 bg-denim-blue hidden lg:block" />
					<div className="h-1 bg-denim-blue w-2/3 mx-auto lg:hidden" />
					<div className="flex flex-col text-center lg:text-left w-full gap-5 my-auto">
						<p>
							I worked as a freelance software developer on various projects for
							different clients. I initially started to take commissions to see
							where I stand as a software developer and to gain experience in
							the field.
						</p>
						<p>
							Here I learned how to be proactive and flexible in my work. I also
							learned how to communicate effectively with clients and manage my
							time in both school and work.
						</p>
					</div>
				</div>

				<div className="flex flex-col-reverse lg:flex-row w-full mt-10 gap-10">
					<div className="flex flex-col text-center lg:text-right w-full gap-5 my-auto">
						<p>
							During this time, I feel that I know a lot about programming and
							game development. So I wanted to try my skills and knowledge in a
							real world project. I took a commission from a client to develop a
							game for them.
						</p>
						<p>
							During this time, I expanded my horizon to how big the IT industry
							is. I also learned how to be resilient and persistent in my work.{" "}
							<span className="font-bold">
								Fun Fact: I got banned at Fiverr due to working underage.
							</span>
						</p>
					</div>
					<div className="w-1 bg-denim-blue hidden lg:block" />
					<div className="h-1 bg-denim-blue w-2/3 mx-auto lg:hidden" />
					<div className="flex flex-col text-center lg:text-left w-full my-auto">
						<p>06/01/20 - 09/20/21</p>
						<h3 className="w-full font-inter font-bold text-3xl">
							Freelance Game Developer
						</h3>
						<p className="text-denim-blue text-xl">Fiverr</p>
					</div>
				</div>
			</div>
			<div
				id="hobbies"
				className="hobbies flex flex-col my-20 w-full overflow-hidden"
			>
				<h2 className="text-5xl font-inter font-bold text-platinum-white text-center">
					My <span className="text-denim-blue">Hobbies</span>
				</h2>

				<div className="relative w-full">
					<HorizontalSlide pauseOnHover={false} className="mt-10 py-1">
						{hobbies.map((hobby) => {
							return (
								<div
									key={hobby.name}
									className="bg-ocean-navy flex flex-col items-center w-60 px-3 py-4 border-b-3 border-denim-blue"
								>
									<div className="relative w-full aspect-3/4 rounded-xl overflow-clip">
										<Image
											src={hobby.img}
											alt={hobby.name}
											fill
											className="object-contain w-full"
										/>
									</div>
									<h3 className="font-inter text-2xl font-bold mt-5">
										{hobby.name}
									</h3>
								</div>
							);
						})}
					</HorizontalSlide>
					<div className="absolute top-0 left-0 w-full h-full z-10 flex pointer-events-none">
						<div className="w-full h-full bg-linear-to-r from-obsidian-black to-90%"></div>
						<div className="w-full h-full bg-linear-to-l from-obsidian-black to-90%"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
