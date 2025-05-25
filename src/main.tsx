import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { ErrorBoundary } from 'react-error-boundary';

import './index.css';
import './trusted-security-policies';
import ErrorFallback from './components/utils/ErrorFallback';
import { FullPageLoader, PageLoader } from './components/utils/loading';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
          <React.Suspense fallback={<FullPageLoader />} >
            <App />
          </React.Suspense>
        </ErrorBoundary>
    </HashRouter>
  </React.StrictMode>
);
