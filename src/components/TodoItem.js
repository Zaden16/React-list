import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  // this.props does not work on regular func(){} then .bind(this)on this.markComplete in input should be used

  render() {
    //destructuring
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            // binding id from TodoItem to App
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {''}
          {title}
        </p>
      </div>
    );
  }
}

TodoItem.PropTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
