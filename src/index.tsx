import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme{
    palette : {
      primary: {
        main: string
      },
      secondary: {
        main: string
      };
    }
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
    },
    secondary: {
      main: '#90caf9'
    }
  }
})

const store = setupStore()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
