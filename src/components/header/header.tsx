import { cn } from "@/lib/utils";
import { headerClasses } from "@/styles/header/headerClass";
import navConfig from "@/utils/navConfig";
import { Github } from "lucide-react";
import Logo from "../logo";
import ModeToggle from "../mode-toggle";
import { Button } from "../ui/button";
import DrawerHeader from "./drawerHeader";

export default function Header() {
	return (
		<header className={cn(headerClasses.bodyHeader)}>
			<div className="flex items-center justify-center gap-5">
				<a href="/"
					className="hover:opacity-75 transition-opacity duration-300"
				>
					<Logo size={30} />
				</a>
				<nav className={cn(headerClasses.navBody)}>
					{navConfig.map((item) => {
						return (
							<Button key={item.name} asChild variant={"ghost"} size={"sm"}>
								<a href={item.path} >{item.name}</a>
							</Button>
						);
					})}
				</nav>
			</div>

			<div className="flex items-center justify-center gap-1 capitalize">
				<Button
					asChild
					variant={"outline"}
					size={"default"}
					className="hidden md:flex"
				>
					<a
						href="https://github.com/ali-ali18"
						target="__blank"
						rel="noreferrer"
					>
						Visitar github
						<Github />
					</a>
				</Button>
				<ModeToggle />
				<DrawerHeader />
			</div>
		</header>
	);
}
