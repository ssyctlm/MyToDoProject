import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import Todos from './Todos';
import Form from './Form';
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

  //handlers
  handleComplete = (todoItem)=>{
    const copyTodos = [...this.state.todoList];
    const idx = copyTodos.indexOf(todoItem);
    copyTodos[idx].completed = !copyTodos[idx].completed;
    this.setState({todoList:copyTodos})
      // print to debug
      // console.log(copyTodos)
      // console.log(todoItem)
  }

  handleCompleteAll = ()=>{
    const copyTodos = [...this.state.todoList];
    copyTodos.map(todo => todo.completed = true );
    this.setState({todoList:copyTodos})

  }
  
  handleDelete = (todoItem)=>{
    const filtedTodos = this.state.todoList.filter(item=> item.id !== todoItem.id);
    this.setState({todoList:filtedTodos})
  }
  handleDeleteAll = ()=>{
    this.setState({todoList:[]})
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
      <div className="container-fluid bg-light" style={{height:"100vh"}}>
        <div className="row" >
          {/* Header */}
          <div className="col-12 p-3 bg-danger header" style={{height:"100px"}}>
            <h1 className="text-center text-white h1">To do List</h1>
          </div>

          {/* Add todo */}
          <div className="col-12" style={{height:"130px"}} >
            <Form handleSubmit = {this.handleSubmit} handleChange = {this.handleChange} eventPayload = {this.state.eventPayload}/>
          </div>

          {/* Todo List */}
          <div className="col-12" style={{flex:'1'}} >
            <Todos 
            todos={this.state.todoList} 
            handleComplete = {this.handleComplete} 
            handleDelete = {this.handleDelete}
            handleDeleteAll = {this.handleDeleteAll}
            handleCompleteAll = {this.handleCompleteAll}
            />
          </div>
        </div>
      </div>
    );
  }



}

export default Main;
