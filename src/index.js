import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='lg:flex lg:justify-center'>
        <App className="lg:border-secondary lg:border-4" />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

