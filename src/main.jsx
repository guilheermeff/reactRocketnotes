import React from 'react';
import ReactDOM from 'react-dom/client';
import { SignUp } from './pages/SignUp';
import  GlobalStyles from './styles/global.js';
import theme from './styles/theme.js';  

import { ThemeProvider } from 'styled-components';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SignUp />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
)
