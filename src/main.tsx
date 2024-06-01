import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import Loading from '@components/utils/Loading';

import './index.css';
import './trusted-security-policies';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <React.Suspense fallback={<Loading />}>
        <App />
      </React.Suspense>
    </HashRouter>
  </React.StrictMode>
);
