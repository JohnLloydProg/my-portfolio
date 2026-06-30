export default function Loading() {
	return (
		<div className="flex flex-col items-center min-h-lvh">
			<h1 className="font-inter text-5xl font-bold mt-10">
				Explore <span className="text-pastel-blue">My</span>{" "}
				<span className="text-denim-blue">Projects</span>
			</h1>
			<div className="flex flex-wrap gap-10 max-w-6xl justify-center mt-20">
				{[...Array(6)].map((_, index) => {
					return (
						<div
							key={`item-${index}`}
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
