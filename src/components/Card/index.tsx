import styles from './index.module.scss';
import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: 'small' | 'normal' | 'big'
}

export const Card = (props: CardProps): React.ReactElement => {
	const size = props.size ? props.size : 'normal';

	return (
		<div className={`${styles.card} ${styles[`card_${size}`]}`}>
			{props.children}
		</div>
	);
};