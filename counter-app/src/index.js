import React from 'react';
import ReactDOM from 'react-dom';
import 'tailwindcss/dist/base.css';
import 'tailwindcss/dist/components.css';
import 'tailwindcss/dist/utilities.css';
import reportWebVitals from './reportWebVitals';
import Counters from './components/counters';

ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
