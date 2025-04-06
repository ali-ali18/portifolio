import projects from "@/db/projectsDb";
import Container from "../container";
import CardProject from "./cardProjects";

export default function Project() {
	return (
		<Container>
			<div
				id="projetos"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center my-12"
			>
				{projects.map(
					(item) =>
						item.isView && (
							<CardProject
								description={item.description}
								key={item.title}
								title={item.title}
								urlImg={item.urlImg}
								link={item.link}
							/>
						),
				)}
			</div>
		</Container>
	);
}
