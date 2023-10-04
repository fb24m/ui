import './index.scss';

import { Welcome } from '../../screens/welcome';
import { About } from '../../screens/About';
import { Contact } from '../../screens/Contact';
import { Portfolio } from '../../screens/Portfolio';

export const Home = (): JSX.Element => {
	return (
		<>
			<Welcome />
			<About />
			<Portfolio />
			<Contact />
		</>
	);
}