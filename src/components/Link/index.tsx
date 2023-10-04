import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps.interface';

interface LinkProps extends TextComponentProps {
	href: string
	style?: boolean
}

export const Link = (props: LinkProps) => {
	return <a onClick={() => { document.body.style.transform = 'translateX(100%)'; document.body.style.opacity = '0' }} href={`${props.href}`} className={`${props.style === undefined || props.style ? styles.link : ''} ${props.className}`}>{props.children}</a>
};