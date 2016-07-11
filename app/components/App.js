import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterList from './FilterList';

const App = () => (
  <div className="container">
    <AddTodo />
    <TodoList />
    <FilterList />
  </div>
);

export default App;
