import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ''
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      todos: [...this.state.todos, { name: this.state.name, id: uuidv4() }],
      name: ''
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
          <label htmlFor="name">Enter Todo</label>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
          <button>Submit></button>
        </form>
        <TodoList removeTodo={this.removeTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
