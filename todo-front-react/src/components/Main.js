import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import Task from './Task';
// import {Container, Row, Col} from 'react-bootstrap';
class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todoList:[
        {id:1, finish:false, text:"wash plates"},
        {id:2, finish:false, text:"do the laundry"},
        {id:3, finish:false, text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat nobis voluptas iure animi tenetur sit dignissimos aperiam excepturi ipsa veritatis amet non, velit nemo, tempora facilis inventore dolore deleniti!"}]
    }
  }
  // finish = (id)=>{
  //   this.setState(state =>({
  //     flag: !state.flag
  //   }))

  // }
  render(){
    
    return (
      <container className="fluid">
        <div className="row">
          <div className="col-12 p-3 bg-danger">
          <h1 className="text-center text-white h1">To do List</h1>
          </div>
          <div className="col-12 bg-light" style={{height:"88vh"}}>
            <div className="row justify-content-center" style={{height:"60vh"}}>
              <div className="col-10 my-5">
              <ul className="list-group">

              { this.state.todoList.map(task =><Task key={task.id} inbox={task.text} index={task.id}/>) }
              </ul>
              </div>
            </div>
            <div className="row justify-content-center">
                 <div className="input-group input-group-lg col-10 col-md-6 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Do</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                  <button class="btn btn-primary ml-3" type="submit">Add to list</button>
                </div>
            </div>
          </div>
        </div>
      </container>
    );
  }



}

export default Main;
