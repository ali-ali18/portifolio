import { useEffect } from "react";

interface ObserverComponenteProps {
	ref: React.RefObject<HTMLElement | null>;
	thresholdValue: number;
	setter: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function observerComponente({
	ref,
	thresholdValue,
	setter,
}: ObserverComponenteProps) {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entry) => {
				// biome-ignore lint/complexity/noForEach: <explanation>
				entry.forEach((entrou) => {
					if (entrou.isIntersecting) {
						setter(true);
					} else {
						setter(false);
					}
				});
			},
			{
				threshold: thresholdValue,
			},
		);

		if (ref?.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref?.current) {
				observer.unobserve(ref.current);
			}
		};
	});
}
