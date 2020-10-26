import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import AppProvider from './hooks'

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes/>
    </AppProvider>

    <GlobalStyle/>
  </BrowserRouter>
);
 
export default App;
