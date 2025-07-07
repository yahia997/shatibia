import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This load the entire application on the screen
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
