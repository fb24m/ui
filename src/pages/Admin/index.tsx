// import styles from './index.module.scss';
import React, { useState } from 'react';

import { signInWithPopup } from 'firebase/auth';

import { auth, provider } from './../../services/firebase.service';
import { Button } from '../../components';
import { useWriteDatabase } from '../../hooks/useWriteDatabase';
import { useReadDatabase } from '../../hooks/useReadDatabase';

interface IUser {
	email: string | null
}

export const AdminPanel = (): React.ReactElement => {
	const [user, setUser] = useState<IUser | false>(false);
	const [loaded, setLoaded] = useState<boolean>(false);

	const login = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				// const credential = GoogleAuthProvider.credentialFromResult(result);
				// The signed-in user info.
				const user: IUser = result.user!;
				setUser(user);
			}).catch((error) => {
				console.log(error);
			})
	}

	console.log(user);

	if (!loaded) {
		const title = useReadDatabase(`cards/0`);

		console.log(title);

		setLoaded(true);
	}


	return (
		<div className="container">
			{!user ? <Button appearance='Primary' onClick={login}>Войти с помощью Google</Button> : ''}
			{user && user?.email === 'fakem1ner@yandex.ru' ? <>

				<Button onClick={() => {
					useWriteDatabase('cards/0', { icon: 'search', title: 'Заголовок', description: 'Описание' });
				}}>Записать!</Button>
			</> : ''}
			{user && user?.email !== 'fakem1ner@yandex.ru' ? '403 Доступ запрещен' : ''}
		</div>
	);
};