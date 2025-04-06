import { motion } from "motion/react";

export default function ScrollIndicator() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100, scale: 0.5 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 1 }}
		>
			<motion.div
				className="h-5 w-5 bg-primary rounded"
				initial={{ rotate: 0 }}
				animate={{ rotate: [360, 0, 180] }}
				transition={{ duration: 4, repeat: 9999, repeatType: "loop" }}
			/>
		</motion.div>
	);
}
