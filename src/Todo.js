import React, { PureComponent, Component } from 'react';

class Todo extends PureComponent {
  remove = () => {
    this.props.removeTodo(this.props.name);
  };
  render() {
    console.log(this.props);
    return (
      <li>
        {this.props.name}
        <button onClick={this.remove}>X</button>
      </li>
    );
  }
}

export default Todo;
