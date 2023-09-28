import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps.interface';

interface LinkProps extends TextComponentProps {
	href: string
}

export const Link = (props: LinkProps) => {
	return <a href={props.href} className={`${styles.link} ${props.className}`}>{props.children}</a>
};