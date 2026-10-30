import { MotionConfig } from 'framer-motion';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import './styles/base.css';
import './styles/components.css';
import './styles/sections.css';
import { findPlaceholders } from './utils/placeholders';

// While developing, list what still needs your real details.
if (import.meta.env.DEV) {
  const todo = findPlaceholders();
  if (todo.length > 0) {
    console.info(`Portfolio: ${todo.length} placeholders left to fill in:\n- ${todo.join('\n- ')}`);
  }
}

const root = document.getElementById('root');
if (!root) throw new Error('Root element #root not found');

createRoot(root).render(
  <StrictMode>
    <ErrorBoundary>
      {/* reducedMotion="user" turns off movement for visitors who ask for less motion */}
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </ErrorBoundary>
  </StrictMode>,
);