import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css'
import App from './App';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);