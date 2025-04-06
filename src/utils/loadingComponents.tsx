import { useEffect } from "react";

interface LoadingComponentProps {
	setterActive: React.Dispatch<React.SetStateAction<boolean>>;
	delay?: number;
}

export default function LoadingComponent({
	setterActive,
	delay = 1200,
}: LoadingComponentProps) {
	useEffect(() => {
		const delayTime = delay;

		const timer = setTimeout(() => {
			setterActive(true);
		}, delayTime);

		return () => clearTimeout(timer);
	}, [setterActive, delay]);
}
