import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { LanguageProvider } from './context/LanguageContext';
import App from './App';
import './styles/tokens.css';
import './styles/global.css';
import './styles/components.css';
import './styles/pages.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
