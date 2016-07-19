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