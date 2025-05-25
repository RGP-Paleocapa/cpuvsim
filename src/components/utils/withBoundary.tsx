import React, { Suspense, LazyExoticComponent } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/utils/ErrorFallback';

type WithBoundaryOptions = {
  loader?: React.ReactNode;
};

export function withBoundary<ComponentType extends LazyExoticComponent<React.ComponentType<any>>>(
  Component: ComponentType,
  options?: WithBoundaryOptions
): React.FC<React.ComponentProps<ComponentType>> {
  const fallback = options?.loader || null;

  return function WrappedComponent(props) {
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={fallback}>
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };
}
