import React, { PropTypes } from 'react';

const TodoItem = ({ name, completed }) => (
  <li
    className={completed ? 'completed' : ''}
  >
    {name}
  </li>
);

TodoItem.propTypes = {
  name: PropTypes.string,
  completed: PropTypes.bool
};

export default TodoItem;
