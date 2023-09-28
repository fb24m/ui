export const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
	entries.forEach((entry, index) => {
		setTimeout(() => {
			if (entry.isIntersecting) {
				entry.target.classList.add('active');
			}
		}, index * 20);
	});
});