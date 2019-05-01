import React, { Component } from 'react';
import Todo from './Todo';

//TODO: Add form, add uuid
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { name: 'Groceries', id: 1 },
        { name: 'Study', id: 2 },
        { name: 'Sleep', id: 3 },
        { name: 'Party', id: 4 }
      ]
    };
  }

  removeTodo = name => {
    let filteredTodos = this.state.todos.filter(todo => {
      return todo.name !== name;
    });
    this.setState({ todos: filteredTodos });
  };

  render() {
    const list = this.state.todos.map(todo => {
      return (
        <Todo name={todo.name} id={todo.id} removeTodo={this.removeTodo} />
      );
    });
    return <ul>{list}</ul>;
  }
}

export default TodoList;
