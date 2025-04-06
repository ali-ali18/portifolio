import { Separator } from "@radix-ui/react-separator";
import Container from "../container";
import React, { lazy, Suspense, useRef, useState } from "react";
import Loading from "../loading";
import LoadingComponent from "@/utils/loadingComponents";
import observerComponente from "@/utils/observerComponente";

const Orb = lazy(() => import("../backgrounds/Orb/Orb"));

export default function AboutHome() {
	const [isActive, setIsActive] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const orbRef = useRef<HTMLDivElement | null>(null);

	LoadingComponent({ setterActive: setIsActive, delay: 500 });
	observerComponente({
		ref: orbRef,
		thresholdValue: 0.1,
		setter: setIsVisible,
	});

	const OrbIsActive = isActive && isVisible && (
		<React.Fragment >
			<div className="h-[600px]">
				<Suspense
					fallback={
						<div className="w-full h-full flex items-center justify-center">
							<Loading />
						</div>
					}
				>
					<Orb />
				</Suspense>
			</div>
			<div>
				<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-muted">
					Hover
				</span>
			</div>
		</React.Fragment>
	);

	return (
		<Container>
			<Separator />
			<section className=" w-full flex flex-col lg:flex-row justify-center items-center gap-5 h-auto md:h-screen" id="about">
				<div className="flex-1 flex flex-col gap-3">
					<span className="text-lg text-muted-foreground capitalize">
						Eu sou...
					</span>
					<p className="text-3xl">
						Developer Front-End com a missão de transformar ideias em interfaces
						apaixonantes e intuitivas que encantam os usuários!
					</p>

					<p className="text-lg text-muted-foreground">
						Ajudando empresas a embarcarem na nova era digital é o que eu amo
						fazer, criar experiências únicas para o usuário final é uma paixão
						indescritível!
					</p>
				</div>
				<div className="flex-1 text-center relative" ref={orbRef}>{OrbIsActive}</div>
			</section>
		</Container>
	);
}
