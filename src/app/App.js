import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import todoStore from './store/todoStore'

import AddTodo from './components/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import FooterLink from './components/FooterLink';

import './main.css';

class App extends Component {
  render() {
    return (
      <div className="todo-app">
        <AddTodo />
        <VisibleTodoList />
        <FooterLink />
      </div>
    );
  }
}

export default App;

render((
  <Provider store={todoStore}>
    <App />
  </Provider>
), document.querySelector('#root'))