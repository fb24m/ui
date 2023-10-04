import { useState } from 'react';

export const useWidth = (max: number) => {
	const [match, setMatch] = useState<boolean>(false);

	window.addEventListener('resize', () => {
		if (window.innerWidth <= max) {
			setMatch(true);
		}
		else {
			setMatch(false);
		}
	});

	return match
};