export default function Loading() {
	const containerArray = Array.from({ length: 6 }, (_, i) => i);
	return (
		<div className="flex flex-col items-center min-h-lvh">
			<h1 className="font-inter text-5xl font-bold mt-10">
				Explore <span className="text-pastel-blue">My</span>{" "}
				<span className="text-denim-blue">Projects</span>
			</h1>

			<div className="flex flex-wrap gap-5 mt-10 w-full max-w-4xl justify-center">
				{containerArray.map((num) => (
					<div
						key={num}
						className="rounded-full bg-ocean-navy w-30 h-8 animate-pulse"
					/>
				))}
			</div>

			<div className="flex flex-wrap gap-10 max-w-6xl justify-center mt-10 mb-10">
				{containerArray.map((num) => {
					return (
						<div
							key={num}
							className="w-70 bg-ocean-navy h-50 animate-pulse flex"
						>
							<div className="w-full h-40 mb-0 mt-auto bg-white/5"></div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
