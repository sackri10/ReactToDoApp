import React, { Component } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Todos } from './components/Todos';
import Header from './components/layout/Header';
import { AddTodo } from './components/AddTodo';
import {v4 as uuid} from 'uuid';
import About from './components/pages/About';
import axios from 'axios';
export class App extends Component {
  state = {
    todos: [ ],
  };
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15').then((response)=> {
    this.setState({todos: response.data});
    });

  }
  markComplete = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    });
  };
  handleDelete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id ? todo : null;
        }),
      ],
    });
  };

  AddTodoItem = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };
    axios.post('https://jsonplaceholder.typicode.com/todos',newTodo ).then(response => {
        this.setState({ todos: [...this.state.todos, response.data] });
    });
    

    console.log(title);
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header></Header>
            <Route exact path="/" render= {props=> (
              
              <React.Fragment>              
                <AddTodo AddTodoItem={this.AddTodoItem} />
            <Todos
              handleDelete={this.handleDelete}
              todos={this.state.todos}
              markComplete={this.markComplete}
            ></Todos>
              </React.Fragment>
            )}>

            </Route>
            <Route path="/about" component={About}>

            </Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App
