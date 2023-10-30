import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps.interface';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';

export const Title4 = (props: TextComponentProps): JSX.Element => {
	const theme = useContext(ThemeContext);

	return <h4 className={`${theme} ${styles.title4} ${props.className}`}>{props.children}</h4>
}