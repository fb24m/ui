import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { ThemeProvider } from './components/ThemeProvider';
import { fb24mDarkTheme } from './themes/fb24mDarkTheme';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from './components/App';
import { SettingsProvider } from './contexts/SettingsProvider';

const queryClient = new QueryClient();

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={fb24mDarkTheme}>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);