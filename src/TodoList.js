import React, { PureComponent, Component } from 'react';
import Todo from './Todo';

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
    // this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo = name => {
    let filteredTodos = this.state.todos.filter(todo => {
      return todo.name !== name;
    });
    this.setState({ todos: filteredTodos });
  };

  render() {
    const list = this.state.todos.map(todo => {
      console.log(this);
      return (
        <Todo
          name={todo.name}
          id={todo.id}
          remove={this.removeTodo(todo.name)}
        />
      );
    });
    return <ul>{list}</ul>;
  }
}

export default TodoList;
