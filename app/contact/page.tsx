import MessageForm from "./messageForm";

export default function Contact() {
	return (
		<div className="flex items-center justify-center px-5 h-fit min-h-lvh mb-10">
			<div className="absolute z-0 inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-size-[32px_32px]" />
			<div className="flex z-1 flex-col lg:flex-row w-full max-w-6xl gap-10 items-center">
				<div className="flex flex-col w-full lg:w-1/2">
					<h1 className="font-inter text-5xl lg:text-7xl font-bold text-center lg:text-left">
						Let's <span className="text-denim-blue">build</span> something
						great! <span className="text-pastel-blue">Contact me</span> for more
						details!
					</h1>
				</div>
				<div className="flex w-full lg:w-1/2 items-center justify-center rounded-xl">
					<MessageForm />
				</div>
			</div>
		</div>
	);
}
