import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterList from './FilterList';
import { Provider } from 'react-redux';
import todoStore from '../store/todoStore';

const App = () => (
  <div className="container">
    <AddTodo />
    <TodoList />
    <FilterList />
  </div>
);

export default (
  <Provider store={todoStore}>
    <App />
  </Provider>
);
