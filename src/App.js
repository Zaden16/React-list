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

  //prop drilling thsi.props.markComplete from TodoItem to Todos to App where the state is located.
  markComplete = id => {
    //able to change the state of id
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
