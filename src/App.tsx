import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';

const App: React.FC = () => (
  <BrowserRouter>
    <HelmetProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </HelmetProvider>
  </BrowserRouter>
);

export default App;
