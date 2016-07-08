import React, { PropTypes } from 'react';

const TodoItem = ({ id, text, completed, onToggle }) => (
  <li
    onClick={onToggle.bind(null, id)}
    className={completed ? 'completed' : ''}
  >
    {text}
  </li>
);

TodoItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  completed: PropTypes.bool,
  onToggle: PropTypes.func
};

export default TodoItem;
