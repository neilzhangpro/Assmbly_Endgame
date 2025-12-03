/**
 * @fileoverview Application Entry Point
 * @file src/main.jsx
 * @description Initializes and renders the React application.
 *              This is the entry point that bootstraps the entire application.
 */

// React core imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Global styles
import './index.css'

// Main application component
import App from './App.jsx'

/**
 * Application Bootstrap
 * 
 * This function initializes the React application by creating a root container
 * and rendering the main App component. It uses React 18's createRoot API which
 * enables concurrent rendering features and improved performance.
 * 
 * **Initialization Process:**
 * 1. Locates the DOM element with id "root" (defined in index.html)
 * 2. Creates a React root using createRoot API
 * 3. Renders the App component wrapped in StrictMode
 * 4. StrictMode enables additional development checks and warnings
 * 
 * **StrictMode Benefits:**
 * - Identifies components with unsafe lifecycles
 * - Warns about legacy string ref API usage
 * - Detects unexpected side effects
 * - Warns about deprecated findDOMNode usage
 * - Ensures reusable state compatibility
 * 
 * **Entry Point:**
 * This file is specified as the entry point in the Vite configuration.
 * When the application loads, this code runs first and mounts the React
 * component tree to the DOM.
 * 
 * @see {@link ./App.jsx} for the main application component
 * @see {@link ./index.html} for the root DOM element
 * 
 * @example
 * // The root element in index.html:
 * // <div id="root"></div>
 * 
 * // This code renders App into that element
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
