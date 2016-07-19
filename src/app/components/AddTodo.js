<<<<<<< HEAD
import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import todoActionCreators from '../actions/todoActionCreators';

class AddTodo extends Component { 
  render() {
    return (
      <div className="input-form">
        <form onSubmit={e => {
          e.preventDefault()
          if (!this.refs.text.value.trim()) {
            return
          }
          this.props.dispatch(todoActionCreators.addTodo(this.refs.text.value))
          this.refs.text.value = ''
        }}>
          <input type="text" ref="text" placeholder="Enter Text" />
          <button type="submit" className="btn-add">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
} 

AddTodo.PropTypes = {
  text: PropTypes.string
}

export default connect()(AddTodo);
=======
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
>>>>>>> dc77c377297b6ed0caa0a6c2e2036292957178b4
