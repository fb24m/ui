import styles from './index.module.scss';
import React from 'react';

interface InputProps {
	icon: React.ReactElement
	placeholder: string
	id?: string
	className?: string
	name?: string
	required?: boolean
	autoComplete?: string
}

export const Input = (props: InputProps): React.ReactElement => {
	return (
		<div className={props.className + ' ' + styles.wrapper}>
			{props.icon ? props.icon : ''}
			<input className={styles.input} id={props.id} autoComplete={props.autoComplete} type="text" placeholder=" " required />
			<span className={styles.label}>{props.placeholder}</span>
		</div>
	);
};