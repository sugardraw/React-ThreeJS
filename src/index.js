import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';
import './css/styles.css';
var setDefaultBrowser = require('set-default-browser');
 
setDefaultBrowser("chrome");



ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
