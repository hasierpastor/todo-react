import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    this.state = {
      todos: [],
      todo: ''
    };
  }

  addTodo = todo => {};

  removeTodo = name => {
    let filteredTodos = this.state.todos.filter(todo => {
      return todo.name !== name;
    });
    this.setState({ todos: filteredTodos });
  };

  render() {
    return <TodoList removeTodo={removeTodo} addTodo={addTodo} />;
  }
}

export default App;
