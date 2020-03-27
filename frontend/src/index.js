import React from 'react';
import ReactDOM from 'react-dom';  // integration into the DOM
import App from './App';  // this is the App.js into a App variable

// React components usually have Capitalized names
// A React component is a function that return HTML
ReactDOM.render(
  <App />,
  document.getElementById('root')
);