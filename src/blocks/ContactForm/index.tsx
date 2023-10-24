import { Alignment, Box, Button, Card, Icon, Input } from '../../components';
import styles from './index.module.scss';
import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { PopupFooter } from '../../components/PopupFooter/index';
import { PopupBody } from '../../components/PopupBody';
import { Popup } from '../../components/Popup/index';

interface ContactFormInputs {
	name: string
	contact: string
	message: string
}

interface ContactFormProps {
	buttonsAlign: Alignment
	buttons?: React.ReactElement
	bind?: string
	as?: 'popup' | 'card'
}

export const ContactForm = (props: ContactFormProps): React.ReactElement => {
	const { register, handleSubmit } = useForm<ContactFormInputs>();

	const sendForm: SubmitHandler<ContactFormInputs> = (data) => {
		const result = `Заявка от ${data.name}. Контакт: ${data.contact}. Комментарий: ${data.message}`;
		fetch(`https://api.telegram.org/bot6338485097:AAGW9HW5F5tv_ZNq-0wTFjK-ERdDfcUQghM/sendMessage?chat_id=872777347&text=${result}`);
	}

	const inputs =
		<div className={styles.inputs}>
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
		</div>

	const buttons =
		<Box align={props.buttonsAlign}>
			{props.buttons}
			<Button type='submit' icon={<Icon name="phone_enabled" />} appearance='Primary'>Отправить</Button>
		</Box>

	return (
		<form className={styles.form} onSubmit={handleSubmit(sendForm)}>
			{props.as === 'popup' ?
				<Popup bind={props.bind!}>
					<PopupBody>
						{inputs}
					</PopupBody>
					<PopupFooter>
						{buttons}
					</PopupFooter>
				</Popup> :
				<>{inputs}
					{buttons}</>}


		</form >
	);
};