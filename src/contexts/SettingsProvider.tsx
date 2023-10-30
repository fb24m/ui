import { useQuery } from '@tanstack/react-query';
import { ReactElement, createContext } from 'react';
import { WordpressService } from '../services/Wordpress';

const defaultSettings = { name: '...', description: '...', site_icon_url: '...' }

export const SettingsContext = createContext(defaultSettings);

export const SettingsProvider = (props: { children: ReactElement | ReactElement[] }): ReactElement => {
	const { isLoading, isSuccess, data } = useQuery(['settings'], () => WordpressService.getSettings());

	if (isLoading) return <SettingsContext.Provider value={defaultSettings}>{props.children}</SettingsContext.Provider>
	if (isSuccess) {
		return (
			<SettingsContext.Provider value={data!.data}>{props.children}</SettingsContext.Provider>
		);
	}
	else return <>Как это случилось-то... Если вы это видите, срочно пишите хелп на почту: help@fb24m.ru</>;
};