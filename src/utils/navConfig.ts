interface NavConfig {
	name: string;
	path: string;
}

const navConfig: NavConfig[] = [
	{
		name: "Home",
		path: "#apresentacaoInit",
	},
	{
		name: "Sobre mim",
		path: "#about",
	},
	{
		name: "Projetos",
		path: "#projetos",
	},
	{
		name: "Contato",
		path: "#social",
	},
];

export default navConfig;
