import styles from './index.module.scss';

interface IconProps {
	name: string
	className?: string
}

export const Icon = (props: IconProps): JSX.Element => {
	return <i className={`${styles.icon} ${props.className ? `${props.className} ` : ''}material-symbols-outlined`}>{props.name}</i>
};