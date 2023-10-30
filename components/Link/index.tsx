import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps.interface';

interface LinkProps extends TextComponentProps {
	href: string
	appearance?: boolean
}

export const Link = (props: LinkProps) => {
	return <a onClick={() => { document.body.style.transform = 'translateX(100%)'; document.body.style.opacity = '0' }} href={`${props.href}`} className={`${props.appearance === undefined || props.appearance ? styles.link : ''} ${props.className}`}>{props.children}</a>
};