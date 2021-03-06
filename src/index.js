import React from 'react';
import ReactDOM from 'react-dom';
import Route from './modules/Layout/routes';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = (
  <Provider store={store}>
    <BrowserRouter basename={'/'}>
      <Route />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
