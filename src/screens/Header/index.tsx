import styles from './index.module.scss';
import React from 'react';

import { Link, Button, Icon, Image } from '../../components';

export const Header = (): React.ReactElement => {
	return (
		<header className={styles.wrapper}>
			<div className={`${styles.container} container`}>
				<Image src="logo.png" alt="" className={styles.logo} />
				<ul className={styles.list}>
					<li className={`observe ${styles.item}`}><Link href="/">Главная</Link></li>
					<li className={`observe ${styles.item}`}><Link href="/#/blog">Блог</Link></li>
					<li className={`observe ${styles.item}`}><Link href="/#/portfolio">Портфолио</Link></li>
					<li className={`observe ${styles.item}`}><Link href="/#/contact">Связаться</Link></li>
				</ul>
				<Button className={`observe`} icon={<Icon name='phone_enabled' />} as='a' appearance='Primary'>Связаться</Button>
			</div>
		</header>
	);
};