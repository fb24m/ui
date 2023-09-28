import "./index.scss";
import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';

interface ButtonProps {
	as?: 'a' | 'button'
	type?: 'button' | 'submit' | 'reset'
	href?: string
	children: JSX.Element | string
	icon?: JSX.Element
	appearance?: 'Primary' | 'Secondary'
	className?: string
	onClick?: Function
};

export const Button = (props: ButtonProps): JSX.Element => {
	const theme = useContext(ThemeContext);

	if (props.as === 'a') {
		return <a className={`button button${props.appearance} ${theme} ${props.className}`} href={props.href}>
			{props.icon ? props.icon : ''}
			{props.children}
		</a>
	}
	else {
		return <button onClick={() => props.onClick ? props.onClick() : ''} className={`button button${props.appearance} ${theme} ${props.className}`}>
			{props.icon ? props.icon : ''}
			{props.children}
		</button>
	}
};