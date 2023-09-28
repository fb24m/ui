import styles from './index.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';

interface IconProps {
	name: string
	className?: string
}

export const Icon = (props: IconProps): JSX.Element => {
	const theme = useContext(ThemeContext)

	return <i className={`${theme} ${styles.icon} ${props.className} material-symbols-outlined`}>{props.name}</i>
};