import React, { PropTypes } from 'react';

const AddTodo = ({ onClick }) => (
  <div className="add-todo row">
    <div className="col-md-7">
      <input type="text" className="form-control" />
    </div>
    <button onClick={onClick} className="col-md-2 col-md-offset-1 btn btn-primary">Add</button>
  </div>
);

AddTodo.propTypes = {
  onClick: PropTypes.func
};

export default AddTodo;
