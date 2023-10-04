import "./index.scss";
import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	as?: 'a' | 'button'
	type?: 'button' | 'submit' | 'reset'
	href?: string
	children: JSX.Element | string
	icon?: JSX.Element
	appearance?: 'Primary' | 'Secondary'
	className?: string
};

export const Button = ({ as, icon, className, href, children, appearance, ...props }: ButtonProps): JSX.Element => {
	const theme = useContext(ThemeContext);

	if (as === 'a') {
		return <a className={`button button${appearance} ${className}`} href={href}>
			{icon ? icon : ''}
			{children}
		</a>
	}
	else {
		return <button {...props} className={`button button${appearance} ${theme} ${className}`}>
			{icon ? icon : ''}
			{children}
		</button>
	}
};