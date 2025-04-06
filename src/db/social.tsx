import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { FaInstagram } from "react-icons/fa";

const SkeletonOne = () => {
	const variants = {
		initial: {
			x: 0,
		},
		animate: {
			x: 10,
			rotate: 5,
			transition: {
				duration: 0.2,
			},
		},
	};
	const variantsSecond = {
		initial: {
			x: 0,
		},
		animate: {
			x: -10,
			rotate: -5,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
		>
			<motion.div
				variants={variants}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
			>
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
				<div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
			</motion.div>
			<motion.div
				variants={variantsSecond}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
			>
				<div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
			</motion.div>
			<motion.div
				variants={variants}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
			>
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
				<div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
			</motion.div>
		</motion.div>
	);
};

const SkeletonTwo = () => {
	const variants = {
		initial: {
			width: 0,
		},
		animate: {
			width: "100%",
			transition: {
				duration: 0.2,
			},
		},
		hover: {
			width: ["0%", "100%"],
			transition: {
				duration: 2,
			},
		},
	};
	const arr = Array.from({ length: 5 }, (_,i) => ({
		id: `item-${i}`,
	}));
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
		>
			{arr.map((item) => (
				<motion.div
					key={item.id}
					variants={variants}
					style={{
						maxWidth: `${Math.random() * (100 - 40) + 40}%`,
					}}
					className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
				/>
			))}
		</motion.div>
	);
};

const SkeletonThree = () => {
	const variants = {
		initial: {
			backgroundPosition: "0 50%",
		},
		animate: {
			backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={variants}
			transition={{
				duration: 5,
				// biome-ignore lint/style/useNumberNamespace: <explanation>
				repeat: Infinity,
				repeatType: "reverse",
			}}
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
			style={{
				background:
					"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
				backgroundSize: "400% 400%",
			}}
		>
			<motion.div className="h-full w-full rounded-lg" />
		</motion.div>
	);
};

const LinkButton = ({
	link,
	children,
}: { link: string; children: React.ReactNode }) => {
	return (
		<Button size={"default"} asChild variant={"outline"}>
			<a href={link} target="__blank">
				{children}
			</a>
		</Button>
	);
};

const socialDb = [
	{
		id: 1,
		title: "Github",
		header: <SkeletonOne />,
		description: (
			<LinkButton link={"https://github.com/ali-ali18"}>Acessar</LinkButton>
		),
		className: "md:col-span-1",
		icon: <Github size={24} />,
	},
	{
		id: 2,
		title: "LinkedIn",
		header: <SkeletonTwo />,
		description: (
			<LinkButton link={"https://linkedin.com/in/alissoncamargo"}>
				Acessar
			</LinkButton>
		),
		className: "md:col-span-1",
		icon: <Linkedin size={24} />,
	},
	{
		id: 3,
		title: "Instagram",
		header: <SkeletonThree />,
		description: (
			<LinkButton link={"https://www.instagram.com/alii_alii005/"}>
				Acessar
			</LinkButton>
		),
		className: "md:col-span-1",
		icon: <FaInstagram size={24} />,
	},
];

export default socialDb;
