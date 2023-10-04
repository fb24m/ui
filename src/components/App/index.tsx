import { useContext, ReactElement, useEffect } from 'react';

import { ITheme } from '../../interfaces/Theme';
import { ThemeContext } from '../ThemeProvider';
import { observer } from '../ObserverProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from '../../screens/Header';

import { Home } from '../../pages/Home';
import { Blog } from '../../pages/Blog';
import { PostCard } from '../../pages/PostCard';
import { NotFoundError } from '../../pages/Error';
import { SettingsContext } from '../../contexts/SettingsProvider';

export const App = (): ReactElement => {
	const theme = useContext<ITheme>(ThemeContext);
	const settings = useContext(SettingsContext);

	const keys = Object.keys(theme);
	const values = Object.values(theme);

	keys.forEach((key, index) => {
		document.documentElement.style.setProperty(`--${key}`, values[index]);
	});

	useEffect(() => {
		const observedElements = document.querySelectorAll('.observe');

		observedElements.forEach((el) => {
			observer.observe(el);
		});

		document.title = `${settings.name}${settings.description ? ` - ${settings.description}` : ''}`;
		document.head.insertAdjacentHTML('beforeend', `<link rel="shortcut icon" href="${settings.site_icon_url}">`);

		console.log('ОБНОВА АРР');
	}, [settings]);

	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<Routes>
					<Route path='/' Component={Home} />
					<Route path='/blog' Component={Blog} />
					<Route path='/post/:id' Component={PostCard} />
					<Route path='/*' Component={NotFoundError} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

window.addEventListener('scroll', () => {
	if (window.scrollY > 0) document.documentElement.classList.add('scroll');
	else document.documentElement.classList.remove('scroll');
});