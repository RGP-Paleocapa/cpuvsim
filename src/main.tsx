import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {process.env.NODE_ENV === 'production' ? (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <React.Suspense fallback="loading">
          <App />
        </React.Suspense>
      </BrowserRouter>
    ) : (
      <BrowserRouter>
        <React.Suspense fallback="loading">
          <App />
        </React.Suspense>
      </BrowserRouter>
    )}
  </React.StrictMode>,
);

