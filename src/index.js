import React from 'react';
import ReactDOM from 'react-dom/client';
import { Principal } from './Principal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Principal/>
  </React.StrictMode>
);
