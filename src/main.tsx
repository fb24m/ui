import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { ThemeProvider } from './components/ThemeProvider';

import { HashRouter, Route, Routes } from 'react-router-dom';
import { observer } from './components/ObserverProvider';

import { Home } from './pages/Home';
import { Header } from './screens/Header';
import { AdminPanel } from './pages/Admin';

import { Client } from '@notionhq/client';

const notion = new Client({ auth: 'secret_io9SaqKTLHbIWZo1SIOZ2d0Ccm9QDTqcN0Tmnr73f2K' })


const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!);

const App = (): React.ReactElement => {
  useEffect(() => {
    const observedElements = document.querySelectorAll('.observe');

    observedElements.forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/admin' Component={AdminPanel} />
        <Route path='/*' Component={() => <>404</>} />
      </Routes>
    </HashRouter>
  )
};

const getPortfolioData = async () => {
  const response = await notion.databases.update({ database_id: '1b1a5bc766ed43a2b1f73a8c4b24e6be' });

  console.log(response);
}

getPortfolioData();


root.render(
  <React.StrictMode>
    <ThemeProvider theme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);