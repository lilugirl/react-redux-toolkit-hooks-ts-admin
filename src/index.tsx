import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './modules/app';
import {HashRouter as Router} from 'react-router-dom';
import {store} from './modules/app/store';
import {Provider} from 'react-redux';
import {run} from './core/bootstrap';

run();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>   
      <App /> 
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


