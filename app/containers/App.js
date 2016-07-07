import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterList from './FilterList';

const App = ({ name }) => (
  <div>
    <AddTodo />
    <TodoList />
    <FilterList />
  </div>
);

export default App;
