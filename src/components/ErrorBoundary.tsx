import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="fatal">
          <h1>Something went wrong</h1>
          <p>The page could not be displayed. Please refresh to try again.</p>
          <button type="button" className="btn btn--primary" onClick={() => window.location.reload()}>
            Refresh page
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}