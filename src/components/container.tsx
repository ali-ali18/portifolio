interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}

export default function Container({ children, className}: ContainerProps) {
	return <div className={`max-w-7xl mx-auto p-4 ${className}`}>{children}</div>;
}
