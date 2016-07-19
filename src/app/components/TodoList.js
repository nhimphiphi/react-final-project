import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onTodoClick }) => (
  <ul className="todo-list">
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        {...todo}
<<<<<<< HEAD
        onClick={() => onTodoClick(todo.id)}
=======
        onClick={() => {
          onTodoClick(todo.id);
        }}
>>>>>>> dc77c377297b6ed0caa0a6c2e2036292957178b4
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
