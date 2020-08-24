import React, { Component } from 'react';
import Todo from './Todo.js'

export default class Todos extends Component {
  render() {
    return (
          
            <div className="row justify-content-center" style={{ height: "60vh" }}>
              <div className="col-10 my-5">
                <ul className="list-group">
                  {
                    this.props.todos.map(todo=>{
                      return <Todo key={todo.id} todo ={todo} handleComplete = {this.props.handleComplete} />
                    })
                  }
                </ul>
              </div>
            </div>
    )
  }
}
