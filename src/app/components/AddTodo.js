import React, {Component} from 'react';
import { connect } from 'react-redux';
import todoActionCreators from '../actions/todoActionCreators';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="input-form">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(todoActionCreators.addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit" className="btn-add">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo;
