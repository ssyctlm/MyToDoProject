import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
// import Task from './Task';
// import {Container, Row, Col} from 'react-bootstrap';
class Main extends React.Component {
  state = {
    todoList: [
      { id: 1, completed: false, text: "wash plates" },
      { id: 2, completed: false, text: "do the laundry" },
      { id: 3, completed: false, text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt placeat nobis voluptas iure animi tenetur sit dignissimos aperiam excepturi ipsa veritatis amet non, velit nemo, tempora facilis inventore dolore deleniti!" }]
  }

  // }
  render() {

    return (
      // Frame ViewPort
      <container className="fluid">

        <div className="row">
          {/* Header */}
          <div className="col-12 p-3 bg-danger">
            <h1 className="text-center text-white h1">To do List</h1>
          </div>
          {/* Tasks Area */}
          <div className="col-12 bg-light" style={{ height: "88vh" }}>
            <div className="row justify-content-center" style={{ height: "60vh" }}>
              <div className="col-10 my-5">
                <ul className="list-group">

                  {this.state.todoList.map(task => <li key={task.id} > {task.text}
                  </li>)}
                </ul>
              </div>
            </div>
            {/* Add task into List */}
            <div className="row justify-content-center">
              <div className="input-group input-group-lg col-10 col-md-6 mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-lg">Do</span>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
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
