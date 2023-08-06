import React from 'react';
import { StoreProvider } from './store';
import HomePage from './pages/home-page';
import AppRouter from './router';

const App = () => {
  return (
    <StoreProvider>
      <AppRouter/>
    </StoreProvider>
  )
}

export default App