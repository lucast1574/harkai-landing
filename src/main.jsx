import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import './responsive.css';
import './editorial.css';
import './motion.css';
const root = document.getElementById('root');
if (root.hasChildNodes()) hydrateRoot(root, <React.StrictMode><App /></React.StrictMode>);
else { const { createRoot } = await import('react-dom/client'); createRoot(root).render(<React.StrictMode><App /></React.StrictMode>); }
