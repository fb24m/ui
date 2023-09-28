import { Button, Icon, Image, Input, MarkedList, Title3 } from '../../components';
import styles from './index.module.scss';
import React from 'react';

const sendForm = (e: React.FormEvent): false => {
	e.preventDefault();
	const form = e.target as HTMLElement;
	const name = (form.querySelector('#name') as HTMLInputElement)!.value;
	const contact = (form.querySelector('#contact') as HTMLInputElement)!.value;
	const message = (form.querySelector('#message') as HTMLInputElement)!.value;

	const result = `Заявка от ${name!}. Контакт: ${contact!}. Комментарий: ${message!}`;

	console.log();

	fetch(`https://api.telegram.org/bot6338485097:AAGW9HW5F5tv_ZNq-0wTFjK-ERdDfcUQghM/sendMessage?chat_id=872777347&text=${result}`);

	return false;
};

export const Contact = (): React.ReactElement => {
	return (
		<div className={`container ${styles.container}`}>
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
			<form className={styles.form} onSubmit={(e: React.FormEvent) => sendForm(e)}>
				<Title3>Оставить заявку</Title3>
				<Input required
					className='observe'
					icon={<Icon name="account_circle" />}
					placeholder='Ваше имя'
					id='name'
					autoComplete='name'
				/>
				<Input required
					className='observe'
					icon={<Icon name="alternate_email" />}
					placeholder='Email или Telegram'
					id='contact'
					autoComplete='email'
				/>
				<Input required
					className='observe'
					icon={<Icon name="comment" />}
					placeholder='Комментарий'
					id='message'
				/>
				<Button type='submit' icon={<Icon name="phone_enabled" />} appearance='Primary'>Отправить</Button>
			</form>
			<div className={styles.block}>
				<Image src="home/contact.png" alt="" />
			</div>
		</div>
	);
};