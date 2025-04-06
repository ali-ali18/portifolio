import {
	Card,
	CardDescription,
	CardSkeletonContainer,
	CardTitle,
} from "../cards-demo-3";
import type { CardProjectProps } from "@/interfaces/cardProjectProps";


export default function CardProject({
	description = "Descrição do projeto",
	link = "/",
	title = "Titulo do projeto",
	urlImg = "https://github.com/ali-ali18.png",
}: CardProjectProps) {
	return (
		<a href={link} target="__blank" rel="noreferrer">
			<Card className="flex flex-col gap-2 max-h-[600px] h-[600px]">
				<CardSkeletonContainer className="hover:scale-110 transition-all duration-300">
					<img src={urlImg} alt={title} width={600} height={400}/>
				</CardSkeletonContainer>
				<CardTitle className="text-3xl">{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</Card>
		</a>
	);
}
