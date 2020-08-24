import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <React.Fragment>
        <li className="list-group-item ">
          <div className="row align-items-center " onClick = {()=>this.props.handleComplete(this.props.todo)}>
            <div className="col-1">
              <div className={this.props.todo.completed ? "radiobox fill" : "radiobox"}> </div>
                {/* {console.log(this.props.todo)} */}
              </div>
            <div className={this.props.todo.completed ? "col-11 delete" : "col-11"}>
              {this.props.todo.text}
            </div>
          </div>
        </li>
      </React.Fragment>
    )
  }
}
