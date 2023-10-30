import styles from "./index.module.scss";
import { TextComponentProps } from "../../interfaces/TextComponentProps.interface";
import { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';

export const Body1Strong = (props: TextComponentProps): JSX.Element => {
	const theme = useContext(ThemeContext);

	return <p className={`${theme} ${styles.body1strong} ${props.className}`}>{props.children}</p>
};