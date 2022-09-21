import React from 'react';
import ReactDOM from 'react-dom/client';
import { Details } from './pages/Details';
import theme from './styles/theme';  

import { ThemeProvider } from 'styled-components';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode theme={theme}>
    <ThemeProvider>
      <Details />
    </ThemeProvider>
  </React.StrictMode>
)
