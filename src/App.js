import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Learn HTML5, CSS3',
        completed: false
      },
      {
        id: 2,
        title: 'JavaScript',
        completed: false
      },
      {
        id: 3,
        title: 'Learn React.js',
        completed: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
