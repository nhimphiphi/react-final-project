import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root.js';
import todoStore from './store/todoStore';

render(
  <Root store={todoStore} />,
  document.querySelector('#root')
);
