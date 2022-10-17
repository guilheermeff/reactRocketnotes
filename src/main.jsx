import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes } from './routes';
import  GlobalStyles from './styles/global.js';
import theme from './styles/theme.js';

import { AuthProvider } from './hooks/auth';

import { ThemeProvider } from 'styled-components';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
