import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

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
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/" component={FooterLink}/>
        <Route path="/active" component={FooterLink}/>
        <Route path="/completed" component={FooterLink}/>
      </Route>
    </Router>
  </Provider>
), document.querySelector('#root'))

