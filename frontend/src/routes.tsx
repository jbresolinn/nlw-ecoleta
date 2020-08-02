import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

interface Props {
  toggleTheme(): void;
}

const Routes: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <BrowserRouter>
      <Route render={ props => <Home toggleTheme={ toggleTheme }/> } path="/" exact />
      <Route render={ props => <CreatePoint /> }path="/create-point" />
    </BrowserRouter>
  )
}

export default Routes;