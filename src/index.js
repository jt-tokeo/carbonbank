import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';

import './css/style.scss';
import { BrowserRouter } from 'react-router-dom';
import { ContextConnection } from './context/ContextConnection';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextConnection>
        <App />
      </ContextConnection>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
