import IconsRender from "@/db/IconsRender";
import { Icon } from "@iconify/react";
import Container from "../container";

export default function Resume() {
	return (
		<Container>
			<section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4" id="resume">
				<div className="flex flex-col gap-2">
					<strong className="text-2xl">Resumo</strong>
					<p className="text-muted-foreground md:w-10/12 lg:w-full">
						Desenvolvedor Front-end (1 ano) apaixonado por criar interfaces web
						impactantes, com experiência inicial em No-Code (CartPanda/Shopify).
						Busco constantemente aprimorar minhas habilidades e tenho como
						objetivo me tornar Full-Stack até o final do ano, explorando
						ativamente tecnologias de back-end para entregar soluções web
						completas e cativantes.
					</p>
				</div>

				<div className="flex flex-col gap-0.5">
					<strong className="text-2xl">Skills</strong>
					<span className="text-lg text-muted-foreground">Framer Motion</span>
					<span className="text-lg text-muted-foreground">UX</span>
					<span className="text-lg text-muted-foreground">UI</span>
					<span className="text-lg text-muted-foreground">
						Desenvolvedor Front-End
					</span>
				</div>

				<div className="flex flex-col gap-0.5">
					<strong className="text-2xl">Techs & Tools</strong>

					<div className="flex flex-wrap gap-3.5 md:w-1/2 lg:w-full items-center justify-items-center mt-2">
						{IconsRender.map((icon) => (
							<Icon icon={icon.icon} key={icon.icon} width={42} />
						))}
					</div>
				</div>
			</section>
		</Container>
	);
}
