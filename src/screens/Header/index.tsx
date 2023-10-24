import styles from './index.module.scss';
import './scroll.scss';
import React from 'react';

import { Link, Button, Icon, Image, Popup, useModal, Alignment } from '../../components';
import { useState, useContext } from 'react';
import { SettingsContext } from '../../contexts/SettingsProvider';
import { ContactForm } from '../../blocks/ContactForm/index';
import { Title2 } from '../../components/Title2/index';
import { PopupFooter } from '../../components/PopupFooter/index';
import { PopupBody } from '../../components/PopupBody';

const toggleState = <T,>(value: T, setter: Function, newValue: T) => {
	if (value === '') setter(newValue);
	else setter('');
}

export const Header = (): React.ReactElement => {
	const [contactPopup, toggleContactPopup] = useModal();
	const [headerClass, setHeaderClass] = useState('');
	const settings = useContext(SettingsContext);

	const toggleMenuOpened = () => {
		toggleState(headerClass, setHeaderClass, `_menu-opened ${styles.menuOpened}`);
	}

	return (
		<>
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
					<Button onClick={toggleContactPopup} className={`observe ${styles.button}`} icon={<Icon name='phone_enabled' />} as='button' appearance='Primary'>Связаться</Button>
				</div>
			</header>


			<ContactForm bind={contactPopup} as='popup' buttonsAlign={Alignment.end}
				buttons={<Button icon={<Icon name='cancel' />} appearance='Secondary' onClick={toggleContactPopup}>Закрыть</Button>} />

		</>
	);
};