import { motion, useScroll, useTransform } from "motion/react";

type scrollFloatAnimatiton = {
	children: React.ReactNode;
	direction?: "left" | "right";
	distance: number;
};

export default function ScrollFloat({
	children,
	distance = 300,
	direction = "right",
}: scrollFloatAnimatiton) {
	const { scrollYProgress } = useScroll();

	const x = useTransform(
		scrollYProgress,
		[0, 1],
		direction === "right" ? [0, distance] : [0, -distance],
	);

	return (
		<motion.div
			style={{ x }}
			className="w-full"
			exit={{ x: 0 }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 10,
			}}
		>
			{children}
		</motion.div>
	);
}
