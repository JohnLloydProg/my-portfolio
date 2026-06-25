import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import NavBar from "./components/navBar";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "./components/footer";

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" });

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "John Lloyd Unida",
	description: "Portfolio Website of John Lloyd",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				geistSans.variable,
				geistMono.variable,
				"font-mono",
				jetbrainsMono.variable,
				interHeading.variable,
			)}
		>
			<body className="min-h-full flex flex-col">
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
