import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.state.todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          state={props.state}
          updateState = {props.updateState}
        />
      ))}
    </div>
  );
};

export default TodoList;
