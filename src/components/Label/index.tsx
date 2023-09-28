import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps.interface';

export const Label = (props: TextComponentProps) => {
	return <span className={`${styles.label} ${props.className}`}>{props.children}</span>
};