import React, { Component } from 'react';
import Todo from './Todo.js'

export default class Todos extends Component {
  render() {
    return (
          
            <div className="row justify-content-center" style={{ height: "60vh" }}>
              <div className="col-10 ">
                <ul className="list-group">
                  { 
                    this.props.todos.length === 0 ? <p className="my-5 h3 text-center text-secondary">The list is blank <br></br>+++Add Something First+++</p> : (
                      this.props.todos.map(todo=>{
                      return <Todo key={todo.id} todo ={todo} handleComplete = {this.props.handleComplete} handleDelete = {this.props.handleDelete} />
                    })
                    )
                    
                  }
                </ul>
                <div className="form-row">
                  <div className="col-12">
                    <button 
                    className="btn btn-success btn-block my-3" 
                    onClick={()=>{this.props.handleCompleteAll()}}
                    >finish all</button>
                  </div>
                  <div className="col-12">
                    <button 
                    className="btn btn-danger btn-block" 
                    onClick={()=>{this.props.handleDeleteAll()}}
                    >remove all</button>
                  </div>
                  
                </div>
              </div>
            </div>
    )
  }
}
