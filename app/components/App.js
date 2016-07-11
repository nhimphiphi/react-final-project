import React, { PropTypes } from 'react';
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

App.propTypes = {
  params: PropTypes.object.isRequired
};

export default App;
