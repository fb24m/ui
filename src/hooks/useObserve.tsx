import { useEffect } from 'react';

export const useObserve = (observer: IntersectionObserver, selector: string) => {
	useEffect(() => {
		const els = document.querySelectorAll(selector);

		els.forEach((el) => {
			observer.observe(el)
		});
	}, []);
};