import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import "./Mycss.css"
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//     //  React.createElement("div",null,"Hellos World from coreate elements")
//     // React.createElement("div",null,React.createElement("span",null,"Helllos World form span")),
//   document.getElementById('root')
// );


ReactDOM.render(
  <div><App name="Ozair" age={26} /></div>,
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
