import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import todoStore from './store/todoStore';

render(
  <Provider store={todoStore}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
