import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {};
  render() {
    return (
      <div style={this.getStyle}>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

TodoItem.PropTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;