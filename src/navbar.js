import React,{Component}from "react";
import './index.css'
class NavScrollExample extends Component{

  render(){


    return(


      <div className="navbar">
         <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#home">Profile</a></li>
          <li><a href="#home"> Settings</a></li>
          <li><a href="#home">Logout</a></li> 
         </ul>
      </div>
    )
  }
}

export default NavScrollExample;