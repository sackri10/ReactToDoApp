import React, { Component } from 'react'
import { TodoItem } from './TodoItem';

export class Todos extends Component {  
 
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => {
          return (
            <TodoItem
              handleDelete ={this.props.handleDelete} markComplete={this.props.markComplete}
              key={todo.id}
              todo={todo}
            />
          );
        })}
      </div>
    );
  }
}

export default Todos
