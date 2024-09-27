import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css'; // Убедись, что путь правильный
import App from './App';
import "./output.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
