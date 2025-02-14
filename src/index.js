import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TranslatorProvider } from "react-translate";
import translations from './utils/Translate';

import Main from './Page/Main/Main.jsx';
import About from './Page/About/AboutPage';

export default function App () {
  const defaultLocale = navigator.language || "en-US";
  const storedLocale = sessionStorage.getItem("lang");
  const currentLocale = translations[storedLocale] ? storedLocale : defaultLocale;

  sessionStorage.setItem('lang', currentLocale);

  const localeExists = Object.keys(translations).includes(currentLocale);
  const locale = localeExists ? currentLocale : "en-US";
  debugger;

  return (
    <TranslatorProvider translations={translations[locale]} locale={locale}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </TranslatorProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
reportWebVitals();
