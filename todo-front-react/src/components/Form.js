import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center pt-5">
            <form onSubmit={this.props.handleSubmit} className="col-9">
                <div className="form-row">
                  <div className="col-8 col-md-10 col-bg-11">
                    <input type="text" className="form-control" placeholder="what do you want to do ?" onChange={this.props.handleChange} value = {this.props.eventPayload}/>
                  </div>
                  <div className="col-4 col-md-2 col-bg-1 flex-shrink-0">
                    <button className="btn btn-primary" type="submit" onSubmit={()=>this.props.handleAdd()}>Add to list</button>
                  </div>
                </div>
              </form>
          </div>
      </React.Fragment>
    )
  }
}

export default Form
