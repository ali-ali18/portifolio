interface ProjectProps {
	urlImg: string;
	title: string;
	description: string;
	link: string;
	isView?: boolean;
}

const projects: ProjectProps[] = [
	{
		urlImg: "https://imgur.com/8zQi5VB.png",
		title: "Web Movies",
		description:
			"Movies Review é uma plataforma web para explorar filmes. Usuários podem descobrir títulos, ver a média e o total de avaliações, salvar favoritos localmente e assistir a trailers do YouTube. Um recurso completo e intuitivo para entusiastas do cinema.",
		link: "https://movies-review-green.vercel.app/",
		isView: true,
	},
	{
		urlImg: "https://imgur.com/lCuWDsn.png",
		title: "WebCarros",
		description:
			"webCarro é uma plataforma web para compra e venda de veículos. Usuários podem visualizar anúncios de carros disponíveis, adicionar seus próprios veículos à venda e acessar funcionalidades exclusivas através de um sistema de login. O projeto visa facilitar a conexão entre compradores e vendedores de automóveis de forma prática e eficiente.",
		link: "https://web-carros-roan.vercel.app/",
		isView: true,
	},
	{
		urlImg: "https://imgur.com/UGzbcqW.png",
		title: "Tarefas+",
		description:
			"Tarefas+ é um aplicativo de gerenciamento de tarefas que permite criar, organizar e acompanhar afazeres do dia a dia. Com login integrado, os dados são salvos com segurança em banco de dados, possibilitando acesso em diferentes dispositivos.",
		link: "https://tarefa-plus-six.vercel.app/",
		isView: true,
	},
];

export default projects;
