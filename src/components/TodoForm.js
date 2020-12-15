import React from 'react';

export default class TodoForm extends React.Component {
    
    addTodo = e => {
        e.preventDefault();

        const newTodo = { task: this.props.state.todo, done: false, id: Date.now() };
        this.props.updateState({ 
            todos: [...this.props.state.todos, newTodo], 
            todo: '' 
        });
    };
    
    changeTodo = e => {
        this.props.updateState({ todo: e.target.value });
    }
    
    clearDoneTodos = e => {
        e.preventDefault();

        let todos = this.props.state.todos.filter(todo => !todo.done);
        this.props.updateState({ todos });
    };

    render() {
      return ( 
        <form>
            <input
                onChange={this.changeTodo}
                type="text"
                value={this.props.state.todo}
                placeholder="new todo"
            />
            &nbsp;&nbsp;&nbsp;  
            <button onClick={this.addTodo}>Add Todo</button>
            &nbsp;&nbsp;&nbsp;  
            <button onClick={this.clearDoneTodos}>Clear Done Todos</button>
        </form>
      );
    }
  }