import './index.scss';

import { Welcome } from '../../screens/welcome';
import { About } from '../../screens/About';

import { useContext } from 'react';
import { ThemeContext } from '../../components/ThemeProvider';
import { Contact } from '../../screens/Contact';

export const Home = (): JSX.Element => {
	const theme = useContext(ThemeContext);
	return (<div className={`bg-${theme}`}>
		<Welcome />
		<About />
		<Contact />
	</div>);
}