import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";

export default function ModeToggle() {
	const { theme, setTheme } = useTheme();

	function toggleTheme() {
		setTheme(theme === "dark" ? "light" : "dark");
	}

	return (
		<Button variant={"ghost"} size={"icon"} onClick={toggleTheme}>
			{theme === "dark" ? <Sun /> : <Moon />}
		</Button>
	);
}
