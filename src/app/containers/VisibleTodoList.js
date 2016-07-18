import constants from '../constants';

import { connect } from 'react-redux';
import todoActionCreators from '../actions/todoActionCreators';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case constants.SHOW_ALL:
      return todos
    case constants.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case constants.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(todoActionCreators.toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList;
