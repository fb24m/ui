import { createContext } from 'react';

export const ThemeContext = createContext('light');

interface ThemeProviderProps {
	theme: 'dark' | 'light'
	children: JSX.Element | string
}

export const ThemeProvider = (props: ThemeProviderProps): JSX.Element => {
	return (
		<ThemeContext.Provider value={props.theme}>
			{props.children}
		</ThemeContext.Provider>
	)
}