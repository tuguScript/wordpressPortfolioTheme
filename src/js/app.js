import "./script.js";
import "./owl.carousel.min.js";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />
  ,
  document.getElementById('blogPost')
);

console.log(process.env.NODE_ENV)