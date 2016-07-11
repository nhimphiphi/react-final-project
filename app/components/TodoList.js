import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todo';
import { visibleTodos } from '../reducers';

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

const mapStateToProps = (state, { params }) => ({
  todos: visibleTodos(state, params.filter || 'all')
});

const mapDispatchToProps = {
  onToggle: toggleTodo
};

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList));

export default VisibleTodoList;
