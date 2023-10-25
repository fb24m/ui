import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from './components/App';
import { SettingsProvider } from './contexts/SettingsProvider';

import { ThemeProvider } from './components/ThemeProvider';
import { fb24mLightTheme } from './themes/fb24mLightTheme';
import { fb24mDarkTheme } from './themes/fb24mDarkTheme';
import { isLightTheme } from './functions/isLightTheme';

const queryClient = new QueryClient();

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isLightTheme() ? fb24mLightTheme : fb24mDarkTheme}>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);