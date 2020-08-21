import React, { Component } from 'react'

class Task extends Component(){
  // constructor(props){
  //   super(props);
      
    
  // }
  render(){
    return(
      <li onClick = {this.finish} className="list-group-item">
      <div className = 'row'>
        <div className = "listLeft col-1 d-flex align-items-center align-content-center justify-content-center">
          <div className= "radiobox" >
            <br></br>
          </div>
        </div>
        <div className="col-11">
        
        </div>
      </div>
    </li>
    )
  }
}

// let CheckBtn = (props)=>{
//   return(
//       <li onClick = {this.finish} className="list-group-item">
//         <div className = 'row'>
//           <div className = "listLeft col-1 d-flex align-items-center align-content-center justify-content-center">
//             <div className={this.state.flag? "radiobox fill" : "radiobox" }>
//               <br></br>
//             </div>
//           </div>
//           <div className={this.state.flag? "col-11 delete" : "col-11"}>
//           No.{props.index}-{props.inbox}
//           </div>
//         </div>

//       </li>

    
//     )
// }



export default Task