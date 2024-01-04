import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Élément racine manquant dans le document');

const root = createRoot(rootElement);
root.render(<App />);
