import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Header from './components/header';
import registerServiceWorker from './registerServiceWorker';
import './assets/styles/main.css';

ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
