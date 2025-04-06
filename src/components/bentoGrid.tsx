import socialDb from "@/db/social";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { cn } from "@/lib/utils";

export default function BentoGridComponente() {
	return (
		<div className="my-12" id="social">
			<BentoGrid>
				{socialDb.map((item) => (
					<BentoGridItem
						key={item.id}
						className={cn("h-full ", item.className)}
						header={item.header}
						title={item.title}
						description={item.description}
						icon={item.icon}
					/>
				))}
			</BentoGrid>
		</div>
	);
}
