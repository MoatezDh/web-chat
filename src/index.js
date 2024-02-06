import React from 'react';
import { createRoot } from 'react-dom';  // Correct import
import './styles.css';
import AppRouter from './App.js';
import { ContextProvider } from './socketContext.js';
const root = createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <AppRouter />
  </ContextProvider>
);
