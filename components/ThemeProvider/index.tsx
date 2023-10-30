import { createContext } from 'react';
import { ITheme } from '../../interfaces/Theme';

export const ThemeContext = createContext<ITheme>({} as ITheme);

interface ThemeProviderProps {
	theme: ITheme
	children: JSX.Element | string
}

export const ThemeProvider = (props: ThemeProviderProps): JSX.Element => {
	return (
		<ThemeContext.Provider value={props.theme}>
			{props.children}
		</ThemeContext.Provider>
	)
}