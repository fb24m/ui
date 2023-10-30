import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps.interface';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';

export const Title1 = (props: TextComponentProps): JSX.Element => {
	const theme = useContext(ThemeContext);

	return <h1 className={`${theme} ${styles.title1} ${props.className}`}>{props.children}</h1>
}