import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todo';
import { getVisibleTodos } from '../selectors';

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

const mapStateToProps = (state, props) => ({
  todos: getVisibleTodos(state, props)
});

const mapDispatchToProps = {
  onToggle: toggleTodo
};

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList));

export default VisibleTodoList;
