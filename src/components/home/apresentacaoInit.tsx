import renderLetters from "@/utils/renderLetters";
import ScrollIndicator from "../scrollIndicator";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import Threads from "../backgrounds/Threads/Threads";
import LoadingComponent from "@/utils/loadingComponents";
import observerComponente from "@/utils/observerComponente";

export default function ApresentacaoInit({ name }: { name: string }) {
	const [isActive, setIsActive] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const threadsRef = useRef<HTMLDivElement | null>(null);

	observerComponente({
		ref: threadsRef,
		thresholdValue: 0.5,
		setter: setIsVisible,
	});

	const threadsIsVisible = isVisible && isActive && (
		<motion.div
			className="w-full h-full"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.2 }}
		>
			<Threads amplitude={0.5} />
		</motion.div>
	);

	LoadingComponent({ setterActive: setIsActive, delay: 0.8 });

	return (
		<div
			className="w-full mt-4 relative h-[calc(100vh-4.5rem)] max-w-7xl mx-auto "
			ref={threadsRef}
			id="apresentacaoInit"
		>
			{threadsIsVisible}
			<div className="absolute top-1/2 left-1/2 transform text-center -translate-x-1/2 -translate-y-1/2">
				<div className="w-full flex flex-col items-center gap-4">
					<p className="text-lg md:text-2xl text-muted-foreground">
						Olá, eu sou
					</p>
					<div className="flex gap-4.5 md:gap-10 text-5xl sm:text-6xl md:text-8xl">
						{renderLetters({ name: name, isAnimated: true })}
					</div>
					<p className="text-lg md:text-xl text-muted-foreground w-full md:w-10/12">
						um desenvolvedor Front End apaixonado por transformar ideias em
						experiências web incríveis.
					</p>

					<div className="flex mt-10 items-center justify-center flex-col">
						{isActive && <ScrollIndicator />}
						<div className="flex gap-2.5 mt-2">
							{renderLetters({ name: "scroll", isAnimated: false })}
						</div>
					</div>
				</div>
			</div>
			<div className="absolute hidden lg:block right-0 bottom-0 bg-gradient-to-l from-[#FFFFFF] to-transparent w-36 dark:bg-gradient-to-l dark:from-[#09090B] dark:to-transparent h-full" />
			<div className="absolute hidden lg:block left-0 bottom-0 bg-gradient-to-r from-[#FFFFFF] to-transparent w-36 dark:bg-gradient-to-r dark:from-[#09090B] dark:to-transparent h-full" />
		</div>
	);
}
