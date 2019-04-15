import React, { PureComponent, Component } from 'react';

class Todo extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <li key={this.props.id}>
        {this.props.name}
        <button onClick={this.props.remove}>X</button>
      </li>
    );
  }
}

export default Todo;
