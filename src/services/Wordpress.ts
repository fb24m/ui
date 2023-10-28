import axios from 'axios';

import { IPost } from '../interfaces/IPost';
import { ISettings } from '../interfaces/ISettings';
import { IPage } from '../interfaces/IPage';

const API = 'https://www.fb24m.ru/fb24m/wp-json/wp/v2';

export const WordpressService = {
	getPosts: () => axios.get<IPost[]>(`${API}/posts`),
	getPageBySlug: (slug: string) => axios.get<IPage[]>(`${API}/pages?slug=${slug}`),
	getPages: () => axios.get<IPage[]>(`${API}/pages`),
	getSettings: () => axios.get<ISettings>('https://www.fb24m.ru/fb24m/wp-json'),
}