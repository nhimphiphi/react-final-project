import React, { PropTypes } from 'react';
import { addTodo } from '../actions/todo';
import { connect } from 'react-redux';

const AddTodo = ({ onClick }) => {
  let input;
  const addNewTodoAndReset = () => {
    // TODO: check empty value first
    onClick(input.value);
    input.value = '';
  };

  return (
    <div className="add-todo row">
      <div className="col-md-7">
        <input
          type="text"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addNewTodoAndReset();
            }
          }}
          className="form-control"
          ref={node => { input = node; }}
        />
      </div>
      <button
        onClick={addNewTodoAndReset}
        className="col-md-2 col-md-offset-1 btn btn-primary"
      >
        Add
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  onClick: PropTypes.func
};

export default connect(null, { onClick: addTodo })(AddTodo);
