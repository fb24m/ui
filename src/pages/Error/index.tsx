import styles from './index.module.scss';
import React from 'react';

import { Image, Body1, Button, Icon } from '../../components';

interface ErrorProps {
	code: number
	message: string
	image: string
}

export const Error = (props: ErrorProps): React.ReactElement => {
	return (
		<div className={`container ${styles.container}`}>
			<div className={styles.block}>
				<Image className={styles.image} src={props.image} alt="" />
			</div>
			<div className={styles.block}>
				<div className={styles.code}>{props.code}</div>
				<div className={styles.instructions}>
					<Body1 className={styles.message}>{props.message}</Body1>
					<div className={`buttons ${styles.buttons}`}>
						<Button icon={<Icon name='cottage' />} appearance='Primary' as='a' href='/'>На главную</Button>
						<Button icon={<Icon name='phone_enabled' />} appearance='Secondary' as='a' href='mailto:help@fb24m.ru'>help@fb24m.ru</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export const NotFoundError = (): React.ReactElement => (
	<Error code={404} message="Вам отправили нерабочую ссылку или вы просто ошиблись при наборе. Если вы обнаружили ее на этом сайте, напишите в поддержку. Или вернитесь на главную и поищите нужную страницу оттуда" image="error/keyboard.png" />
);