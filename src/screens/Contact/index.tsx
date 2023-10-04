import { Button, Icon, Image, Input, MarkedList, Title3 } from '../../components';
import styles from './index.module.scss';
import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Card } from '../../components/Card/index';

interface ContactForm {
	name: string
	contact: string
	message: string
}

export const Contact = (): React.ReactElement => {
	const { register, handleSubmit } = useForm<ContactForm>();

	const sendForm: SubmitHandler<ContactForm> = (data) => {
		console.log(data);
		const result = `Заявка от ${data.name}. Контакт: ${data.contact}. Комментарий: ${data.message}`;
		fetch(`https://api.telegram.org/bot6338485097:AAGW9HW5F5tv_ZNq-0wTFjK-ERdDfcUQghM/sendMessage?chat_id=872777347&text=${result}`);
	}

	return (
		<div className={`container ${styles.container}`} id='contact'>
			<MarkedList>
				<li className={`observe ${styles.item}`}>
					Уже нашли подходящую услугу и хотите заказать? Или еще не нашли, и хотите получить помощь в выборе?
				</li>
				<li className={`observe ${styles.item}`}>
					Оставьте контакты, свяжусь, обсудим ваш проект и подберем тариф - это бесплатно и не отнимет много времени
				</li>
				<li className={`observe ${styles.item}`}>
					Если не ответил в течении 1-2 дней, можете оставить заявку еще раз или написать на почту напрямую - hello@fb24m.ru
				</li>
				<li className={`observe ${styles.item}`}>
					При спаме заявками могу не ответить вовсе. Цените мое и ваше время
				</li>
				<li className={`observe ${styles.item}`}>
					Работаю только по предоплате 50%
				</li>
			</MarkedList>
			<form className={styles.form} onSubmit={handleSubmit(sendForm)}>
				<Card size='big'>
					<Title3>Оставить заявку</Title3>
					<Input
						required
						register={register}
						className='observe'
						name='name'
						icon={<Icon name="account_circle" />}
						placeholder='Ваше имя'
						autoComplete='name'
					/>
					<Input
						required
						register={register}
						name='contact'
						className='observe'
						icon={<Icon name="alternate_email" />}
						placeholder='Email или Telegram'
						autoComplete='email'
					/>
					<Input
						required
						register={register}
						name='message'
						className='observe'
						icon={<Icon name="comment" />}
						placeholder='Комментарий'
					/>
					<Button type='submit' icon={<Icon name="phone_enabled" />} appearance='Primary'>Отправить</Button>
				</Card>
			</form>
			<div className={styles.block}>
				<Image src="home/contact.png" alt="" />
			</div>
		</div>
	);
};