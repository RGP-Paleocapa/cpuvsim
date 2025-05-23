import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import Loading from '@components/utils/Loading';
import { ErrorBoundary } from 'react-error-boundary';

import './index.css';
import './trusted-security-policies';
import ErrorFallback from './components/utils/ErrorFallback';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // Reset the state or refresh
            window.location.reload();
          }}
        >
          <React.Suspense fallback={<Loading />} >
            <App />
          </React.Suspense>
        </ErrorBoundary>
    </HashRouter>
  </React.StrictMode>
);
