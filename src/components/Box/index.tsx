import styles from './index.module.scss';
import React, { HTMLAttributes } from 'react';

export enum Alignment {
	start = 'start',
	center = 'center',
	end = 'end',
	stretch = 'stretch',
}

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
	align?: Alignment
	gap?: number
}

export const Box = ({ align = Alignment.start, children, gap = 8, ...props }: BoxProps): React.ReactElement => {
	return (
		<div {...props} style={{ gap: gap }} className={`${styles.box} ${styles[`align${align}`]}`}>{children}</div>
	);
};