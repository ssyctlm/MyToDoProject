import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import Todos from './Todos';
// import {Container, Row, Col} from 'react-bootstrap';
class Main extends React.Component {
  state = {
    todoList: [
      { id: 1, completed: false, text: "wash plates" },
      { id: 2, completed: true, text: "do the laundry" },
      { id: 3, completed: false, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat nobis voluptas iure animi tenetur sit dignissimos aperiam excepturi ipsa veritatis amet non, velit nemo, tempora facilis inventore dolore deleniti!" }
    ],
    eventPayload:''
  }

  //handler
  handleComplete = (todoItem)=>{
    const copyTodos = [...this.state.todoList];
    const idx = copyTodos.indexOf(todoItem);
    copyTodos[idx].completed = !copyTodos[idx].completed;
    this.setState({todoList:copyTodos})
      // print to debug
      // console.log(copyTodos)
      // console.log(todoItem)
  }

  handleChange = (event)=>{
    this.setState({eventPayload:event.target.value})
    console.log(this.state.eventPayload)
  }



  handleSubmit = (event)=>{
    event.preventDefault();
    if(this.state.eventPayload){
      const idb4 = this.state.todoList.length;
      const copyTodos = this.state.todoList.slice();
      const temp = {};
      temp.id = idb4+1;
      temp.completed = false;
      temp.text = this.state.eventPayload;
      copyTodos.push(temp);
      this.setState({todoList:copyTodos, eventPayload:''})
    }else alert(`don't submit unless you fill the blank with something`);
  }

  render() {

    return (
      // Frame ViewPort
      <div className="container fluid">

        <div className="row">
          {/* Header */}
          <div className="col-12 p-3 bg-danger">
            <h1 className="text-center text-white h1">To do List</h1>
          </div>
          {/* Tasks Area */}
          <div className="col-12 bg-light" style={{ height: "88vh" }}>
            <Todos todos={this.state.todoList} handleComplete = {this.handleComplete}/>
            {/* Add task into List */}
            <div className="row justify-content-center">
              {/* <div className="input-group input-group-lg col-10 col-md-6 mb-4">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-lg">Do</span>
                </div>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                <button className="btn btn-primary ml-3" type="submit" onSubmit={()=>this.handleAdd()}>Add to list</button>
              </div> */}
              <form onSubmit={this.handleSubmit} className="col-8">
                <div className="form-row">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="what do you want to do ?" onChange={this.handleChange} value = {this.state.eventPayload}/>
                  </div>
                  <div className="col">
                  <button className="btn btn-primary ml-3" type="submit" onSubmit={()=>this.handleAdd()}>Add to list</button>
                  </div>
                </div>
              </form>


            </div>
          </div>
        </div>
      </div>
    );
  }



}

export default Main;
