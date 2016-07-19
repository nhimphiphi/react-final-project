import React, { PropTypes } from 'react';

<<<<<<< HEAD
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
=======
const TodoItem = ({ onClick, completed, text }) => {
  return (
    <li className={completed ? 'text-underline' : 'text-none'}>
      <input className="toggle"
             type="checkbox"
             checked={completed}
             onChange={onClick} />
      <label>
            {text}
      </label>
    </li>
  );
};
>>>>>>> dc77c377297b6ed0caa0a6c2e2036292957178b4

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem;