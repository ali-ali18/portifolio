import Header from "@/components/header/header";
import Logo from "../components/logo";
import { Separator } from "@/components/ui/separator";



export default function Layout({children}: {children: React.ReactNode}) {
	return (
		<div>
			<Header />
			<main className="min-h-screen">
				{children}
			</main>
			<footer className="mt-8 ">
				<Separator />
				<div className="p-3 md:p-6 flex items-center justify-center gap-2">
					<div className="hidden md:block">
						<Logo size={24}/>
					</div>
					<p>
						© {new Date().getFullYear()} - Todos os direitos reservados
					</p>
				</div>
			</footer>
		</div>
	);
}
