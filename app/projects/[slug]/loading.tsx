export default function Loading() {
	const containerArray = Array.from({ length: 3 }, (_, i) => i);
	return (
		<div className="flex justify-center">
			<div className="absolute z-0 inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-size-[32px_32px]" />
			<div className="min-h-lvh z-1 flex flex-col w-full max-w-6xl mt-10 mb-10 animate-pulse">
				<div className="bg-ocean-navy w-7/10 mx-auto aspect-video rounded-xl"></div>

				<div className="h-4 bg-ocean-navy w-40 mb-2 mt-10"></div>
				<div className="flex w-full">
					<div className="h-12 bg-ocean-navy w-100 mb-6"></div>
				</div>
				<div className="h-60 bg-ocean-navy"></div>

				<div className="flex flex-col w-full mt-10">
					<h3 className="text-4xl font-bold font-inter text-center lg:text-left">
						Recent Comments
					</h3>
					<div className="flex flex-wrap justify-center lg:justify-start gap-10 mt-5">
						{containerArray.map((num) => (
							<div
								key={num}
								className="bg-ocean-navy w-80 h-30 animate-pulse"
							></div>
						))}
					</div>
				</div>
				<div className="bg-ocean-navy w-full max-w-4xl mx-auto rounded-xl mt-10 h-110"></div>
			</div>
		</div>
	);
}
