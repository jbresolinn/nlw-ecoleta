import React from 'react';
import GlobalStyle from './styles/global';
import usePersistedState from './utils/usePersistedState';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Home from './pages/Home';

function App() {

  const [ theme, setTheme ] = usePersistedState<DefaultTheme>('theme', light);
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={ theme }>
    
    <Home toggleTheme={ toggleTheme }/>
    <GlobalStyle />
    
    </ThemeProvider>
  );
}

export default App;
