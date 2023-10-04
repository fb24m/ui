import styles from './index.module.scss';
import './scroll.scss';
import React from 'react';

import { Link, Button, Icon, Image } from '../../components';
import { useState, useContext } from 'react';
import { SettingsContext } from '../../contexts/SettingsProvider';

const toggleState = <T,>(value: T, setter: Function, newValue: T) => {
	if (value === '') setter(newValue);
	else setter('');
}

export const Header = (): React.ReactElement => {
	const [headerClass, setHeaderClass] = useState('');
	const settings = useContext(SettingsContext);

	const toggleMenuOpened = () => {
		toggleState(headerClass, setHeaderClass, `_menu-opened ${styles.menuOpened}`);
	}

	return (
		<header className={`${styles.wrapper} ${headerClass} header`}>
			<div className={`${styles.container} container`}>
				<button className={styles.menuClose} onClick={toggleMenuOpened}><Icon name='menu' /></button>
				<div className={`${styles.logoBlock} logoBlock observe`}>
					<Link href="/" style={false}><>
						<Image absoluteSrc src={settings.site_icon_url} alt="" className={`${styles.logo} headerLogo`} onClick={toggleMenuOpened} />
						{settings.name}
					</></Link>
				</div>
				<ul className={styles.list}>
					<li className={`observe ${styles.item}`}><Link href="/blog">Блог</Link></li>
					<li className={`observe ${styles.item}`}><Link href="/portfolio">Портфолио</Link></li>
					<li className={`observe ${styles.item}`}><Link href="/contact">Связаться</Link></li>
				</ul>
				<Button className={`observe ${styles.button}`} icon={<Icon name='phone_enabled' />} as='button' appearance='Primary'>Связаться</Button>
			</div>
		</header>
	);
};