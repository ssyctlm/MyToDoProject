import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <React.Fragment>
        <li className="list-group-item ">
          <div className="row align-items-center " >
            <div className="col-1 d-flex justify-content-center">
              <div className={this.props.todo.completed ? "radiobox fill flex-shrink-0" : "radiobox flex-shrink-0" } onClick = {()=>this.props.handleComplete(this.props.todo)}> </div>
                {/* {console.log(this.props.todo)} */}
              </div>
            <div className={this.props.todo.completed ? "col-9 delete pr-4" : "col-9 pr-4"} onDoubleClick = {()=>this.props.handleComplete(this.props.todo)} >
              {this.props.todo.text}
            </div>
            <div className="col-2 d-flex justify-content-end">
              <button className="btn btn-sm btn-danger m-1" onClick = {()=>this.props.handleDelete(this.props.todo)}>×</button>
              <button className="btn btn-sm btn-success m-1" onClick = {()=>this.props.handleComplete(this.props.todo)} >√</button>
            </div>
          </div>
        </li>
      </React.Fragment>
    )
  }
}
