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

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ''
    });
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  removeTodo = name => {
    let filteredTodos = this.state.todos.filter(todo => {
      return todo.name !== name;
    });
    this.setState({ todos: filteredTodos });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="todo" />
          <input
            onChange={this.handleChange}
            value={this.state.todo}
            name="todo"
            id="todo"
          />
        </form>
        <TodoList removeTodo={this.removeTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
