import styles from './index.module.scss';

interface ImageProps {
	className?: string
	src: string
	alt: string
}

export const Image = (props: ImageProps): JSX.Element => {
	return <img src={`img/${props.src}`} alt={props.alt} className={`observe ${styles.image} ${props.className}`} />
}