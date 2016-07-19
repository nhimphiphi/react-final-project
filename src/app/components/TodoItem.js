import React, { PropTypes } from 'react';

const TodoItem = ({ onClick, completed, text }) => (

  <li className={completed ? 'text-underline' : 'text-none'}>
    <input className="toggle"
           type="checkbox"
           checked={completed}
           onChange={onClick} />
    <label>
          {text}
    </label>
  </li>
)

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem;