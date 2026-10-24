import React from 'react';
import { createRoot } from 'react-dom/client';
import Index from './pages/Index';
import './styles/portfolio.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
);
