import axios from 'axios';

import { IPost } from '../interfaces/IPost';
import { ISettings } from '../interfaces/ISettings';

const API = 'https://www.fb24m.ru/fb24m/wp-json/wp/v2';

export const WordpressService = {
	getPosts: () => axios.get<IPost[]>(`${API}/posts`),
	getSettings: () => axios.get<ISettings>('https://www.fb24m.ru/fb24m/wp-json'),
}