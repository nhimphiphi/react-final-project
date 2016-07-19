<<<<<<< HEAD
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
=======
import 'babel-polyfill';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'
>>>>>>> dc77c377297b6ed0caa0a6c2e2036292957178b4

import todoStore from './store/todoStore'

import AddTodo from './components/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import FooterLink from './components/FooterLink';

import './main.css';

class App extends Component {
<<<<<<< HEAD
	render() {
=======
  render() {
>>>>>>> dc77c377297b6ed0caa0a6c2e2036292957178b4
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
<<<<<<< HEAD
    <App />
  </Provider>
), document.querySelector('#root'))
=======
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/" component={FooterLink}/>
        <Route path="/active" component={FooterLink}/>
        <Route path="/completed" component={FooterLink}/>
      </Route>
    </Router>
  </Provider>
), document.querySelector('#root'));
>>>>>>> dc77c377297b6ed0caa0a6c2e2036292957178b4
