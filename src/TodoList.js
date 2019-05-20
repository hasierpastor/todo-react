import React, { Component } from 'react';
import Todo from './Todo';

const TodoList = props => {
  let { todos, removeTodo } = props;
  const list = todos.map(todo => {
    return (
      <Todo
        name={todo.name}
        key={todo.id}
        id={todo.id}
        removeTodo={removeTodo}
      />
    );
  });

  return <ul>{list}</ul>;
};

export default TodoList;
