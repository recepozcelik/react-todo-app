import React from 'react';

export default class Todo extends React.Component {

    toggleTodoComplete = () => {
        let todos = this.props.state.todos.slice();
        todos = todos.map(todo => {
          if (todo.id === this.props.todo.id) {
            todo.done = !todo.done;
            return todo;
          } else {
            return todo;
          }
        });

        this.props.updateState({ todos });
    };


    render() {
      return ( 
        <div>
            <button onClick={this.toggleTodoComplete}>Done</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
            <label style={this.props.todo.done ? { textDecoration: 'line-through' } : null}>
                {this.props.todo.task}
            </label>
            <br></br>

        </div>
        );
    }
  }