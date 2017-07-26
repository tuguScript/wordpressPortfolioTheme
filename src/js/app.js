import "./script.js";
import "./owl.carousel.min.js";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '../scss/style.scss';

ReactDOM.render(
  <App />
  ,
  document.getElementById('blogPost')
);