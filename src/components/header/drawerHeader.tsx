import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerTrigger,
} from "../ui/drawer";
import { Menu } from "lucide-react";
import navConfig from "@/utils/navConfig";
import { cn } from "@/lib/utils";
import { headerClasses } from "@/styles/header/headerClass";
import { useState } from "react";

export default function DrawerHeader() {
	const [open, setOpen] = useState(false);

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger className="md:hidden">
				<Menu />
			</DrawerTrigger>
			<DrawerContent>
				<DrawerDescription className="flex flex-col py-4.5 gap-2">
					{navConfig.map((item) => (
						<a
							href={item.path}
							onClick={() => setOpen(false)}
							key={item.name}
							className={cn(
								headerClasses.linkMoba,
							)}
						>
							{item.name}
						</a>
					))}
				</DrawerDescription>
			</DrawerContent>
		</Drawer>
	);
}
