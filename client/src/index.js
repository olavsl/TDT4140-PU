import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { AuthContextSupplier } from './context/AuthContext';
import reportWebVitals from './reportWebVitals';
import { TravelsContextSupplier } from './context/TravelContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextSupplier>
      <TravelsContextSupplier>
        <App />
      </TravelsContextSupplier>
    </AuthContextSupplier>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
