import "./script.js";
import "./owl.carousel.min.js";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Blog/App';
import Work from './components/Work/Work';

ReactDOM.render(
  <App />
  ,
  document.getElementById('blogPost')
);

ReactDOM.render(
  <Work />
  ,
  document.getElementById('work')
);