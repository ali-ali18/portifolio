import renderLetters from "@/utils/renderLetters";
import React from "react";
import { Separator } from "./ui/separator";

export default function SeparatorText({ title }: { title: string }) {
	return (
		<React.Fragment>
			<Separator />
			<div className="text-4xl md:text-6xl flex gap-3 items-center justify-center py-5.5">
				{renderLetters({ name: title, isAnimated: false })}
			</div>
			<Separator />
		</React.Fragment>
	);
}
