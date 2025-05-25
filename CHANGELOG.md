## [Unreleased]

### ✨ Features
- Add LazyImage, ImageGroup, ImageContainer components
- Add loading fallback UI (FullPageLoader + loading indicators)
- Introduce `withBoundary` HOC wrapping lazy-loaded routes with ErrorBoundary + Suspense

### 🧹 Refactors
- Centralise route wrappers via `wrap()` util
- Replace direct Suspense/ErrorBoundary usage in routes
- Use semantic HTML in eBook typography pages
- Split layout into smaller components

### ⚙️ Technical
- Revert `delayedLazy` in favour of native `React.lazy`
- Install `react-error-boundary`
- Remove unused components
