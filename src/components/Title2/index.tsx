import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps.interface';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';

export const Title2 = (props: TextComponentProps): JSX.Element => {
	const theme = useContext(ThemeContext);

	return <h2 className={`${theme} ${styles.title2} ${props.className}`}>{props.children}</h2>
}