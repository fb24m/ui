import { database } from '../services/firebase.service';
import { ref, set } from 'firebase/database';

export const useWriteDatabase = (url: string, object: Object) => {
	set(ref(database, url), object);
};