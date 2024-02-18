import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import './trusted-security-policies.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </HashRouter>
  </React.StrictMode>,
)
