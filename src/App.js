import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: 'Learn Java',
          id: 12345,
          done: false
        },
        {
          task: 'Learn AWS',
          id: 12346,
          done: false
        }
      ],
      todo: ''
    };
  }

  updateState = state => {
    this.setState(state);
  };

  render() {

    const mainStyle = {
      backgroundColor: 'beige',
      padding: '10px',
      fontFamily: 'Arial',
      margin: '50px'
    };

    return (
      <div style={mainStyle}>
        <TodoList
          state={this.state}
          updateState = {this.updateState}
        />
        <br></br>
        <TodoForm
          state={this.state}
          updateState = {this.updateState}
        />
      </div>
    );
  }
}

export default App;
