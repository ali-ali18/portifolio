import { motion } from "motion/react";

interface ShinyTextProps {
	children: React.ReactNode;
	className?: string;
	speed?: number;
}

const shinyTextAnimation = {
	initial: { backgroundPosition: "100% 0%" },
	animate: { backgroundPosition: "0% 0%" },
	transition: (speed: number) => ({
		duration: speed,
		ease: "linear",
		repeat: 9999,
		repeatType: "loop" as const,
	}),
};

const styleShinyText = {
	style: {
		backgroundSize: "330% 100%",
		backgroundImage:
			"linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
		WebkitBackgroundClip: "text",
	},
};

export default function ShinyText({ children, speed, className }: ShinyTextProps) {
	return (
		<motion.div
			className={`text-[#b5b5b5a4] bg-clip-text inline-block ${className}`}
			initial={shinyTextAnimation.initial}
			animate={shinyTextAnimation.animate}
			transition={shinyTextAnimation.transition(speed || 5)}
			style={styleShinyText.style}
		>
			{children}
		</motion.div>
	);
}
