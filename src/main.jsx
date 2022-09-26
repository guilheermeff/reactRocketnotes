import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from './pages/Profile';
import  GlobalStyles from './styles/global.js';
import theme from './styles/theme.js';  

import { ThemeProvider } from 'styled-components';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Profile />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
)
