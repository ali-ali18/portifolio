interface LogoProps extends React.SVGProps<SVGSVGElement> {
	size?: number;
}
export default function Logo({ size = 32 }: LogoProps) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			width={size}
			height={size}
			viewBox="0 0 78 69"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M36.184 2.66444C37.1468 0.0439058 40.8532 0.0439162 41.816 2.66446L53.9762 35.7623C54.0948 36.085 54.268 36.385 54.4882 36.6491L77.0716 63.7291C78.8597 65.8732 77.0065 69.0829 74.2557 68.6065L39.512 62.5887C39.1732 62.53 38.8268 62.53 38.488 62.5887L3.74431 68.6065C0.993458 69.0829 -0.85969 65.8732 0.928364 63.7291L23.5118 36.6491C23.732 36.385 23.9052 36.085 24.0238 35.7623L36.184 2.66444Z"
				fill="currentColor"
			/>
		</svg>
	);
}
