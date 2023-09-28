import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps.interface';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';

export const Title3 = (props: TextComponentProps): JSX.Element => {
	const theme = useContext(ThemeContext);

	return <h3 className={`${theme} ${styles.title3} ${props.className}`}>{props.children}</h3>
}