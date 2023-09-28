import { useState } from 'react';

import { database } from '../services/firebase.service';
import { onValue, ref } from 'firebase/database';

export const useReadDatabase = (url: string) => {
	const [data, setData] = useState();

	const dataRef = ref(database, url);

	onValue(dataRef, (snapshot) => {
		setData(snapshot.val())
	});

	return data;
};