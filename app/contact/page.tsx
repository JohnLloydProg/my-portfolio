import MessageForm from "./messageForm";

export default function Contact() {
	return (
		<div className="flex items-center justify-center px-5 h-lvh">
			<div className="flex w-full max-w-6xl">
				<div className="flex flex-col w-1/2">
					<h1 className="font-inter text-7xl font-bold">
						Let's <span className="text-denim-blue">build</span> something
						great! <span className="text-pastel-blue">Contact me</span> for more
						details!
					</h1>
				</div>
				<div className="flex w-1/2 items-center justify-center rounded-xl">
					<MessageForm />
				</div>
			</div>
		</div>
	);
}
