export default function Loading() {
	return (
		<div className="flex justify-center">
			<div className="min-h-lvh flex flex-col w-full max-w-6xl mt-10 mb-10 animate-pulse">
				<div className="bg-ocean-navy w-7/10 mx-auto aspect-video rounded-xl"></div>

				<div className="h-4 bg-ocean-navy w-40 mb-2 mt-10"></div>
				<div className="flex w-full">
					<div className="h-12 bg-ocean-navy w-100 mb-6"></div>
				</div>
				<div className="h-60 bg-ocean-navy"></div>
			</div>
		</div>
	);
}
