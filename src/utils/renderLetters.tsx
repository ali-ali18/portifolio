import { motion } from "motion/react";

interface Props {
	name: string;
	isAnimated?: boolean;
	isView?: boolean;
}

const lyricsAnimation = {
	initial: { opacity: 0.1, y: 100 },
	animate: (index: number) => ({
		opacity: 1,
		y: [50, -15, 0],
		transition: { duration: 1, delay: index * 0.1 },
	}),
};

export default function renderLetters({
	name,
	isAnimated = false,
	isView = false,
}: Props) {
	const lyrics = name.split("");

	const lyricsInSpan = lyrics.map((lyrics, index) => (
		<motion.span
			initial={isAnimated ? lyricsAnimation.initial : {}}
			animate={isAnimated ? lyricsAnimation.animate(index) : {}}
			whileInView={isAnimated && isView ? lyricsAnimation.animate(index) : {}}
			viewport={{ once: true }}
			key={`${index}-${lyrics}`}
			className="uppercase select-none font-medium inline-block "
		>
			{lyrics}
		</motion.span>
	));

	return <>{lyricsInSpan}</>;
}
