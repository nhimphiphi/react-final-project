import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

const TodoList = ({ list }) => (
  <ul className="todo-list row">
    {list.map((todo, key) => (
      <TodoItem {...todo} key={key} />
    ))}
  </ul>
);

TodoList.propTypes = {
  list: PropTypes.array
};

TodoList.defaultProps = {
  list: [
    { name: 'item 1', completed: false },
    { name: 'item 2', completed: true }
  ]
};

const mapStateToProps = (state) => {
  return {
    visibleTodoList: state.todo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (title) => dispatch({
    })
  }
};

export default TodoList;
