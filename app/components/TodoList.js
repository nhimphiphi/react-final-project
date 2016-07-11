import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todo';
import {
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETED
} from '../constants';

const TodoList = ({ todos, ...rest }) => (
  <ul className="todo-list row">
    {todos.map((todo) => (
      <TodoItem {...todo} {...rest} key={todo.id} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array,
  onToggle: PropTypes.func
};

const visibleTodos = (todos, filter) => {
  switch (filter) {
    case FILTER_ALL:
      return todos;
    case FILTER_ACTIVE:
      return todos.filter(t => !t.completed);
    case FILTER_COMPLETED:
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: visibleTodos(state.todos, ownProps.filter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id) => dispatch(toggleTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
