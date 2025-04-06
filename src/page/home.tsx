import AboutHome from "@/components/home/about";
import ApresentacaoInit from "@/components/home/apresentacaoInit";
import SeparatorText from "@/components/separetorText";
import { Separator } from "@/components/ui/separator";
import Social from "@/components/social/social";
import Project from "@/components/projetos/project";
import Resume from "@/components/resume/resume";

export default function Home() {
	return (
		<div className="w-full">
			<ApresentacaoInit name="Alisson" />
			<Separator />

			{/* about */}
			<AboutHome />

			<SeparatorText title="Social" />
			{/* Social */}
			<Social />

			<SeparatorText title="Projetos" />
			{/* Projetos */}
			<Project/>

			<Separator />
			<Resume/>
		</div>
	);
}
