import React,{Component} from "react";
import Imagebox from "./imgbox";
import axios from "axios";
import './index.css'

class Imagelist extends Component{


    constructor(props){

        super(props);
        this.state = {names:[]};
    
}
componentDidMount(){

axios.get("https://jsonplaceholder.typicode.com/users")
.then((response=>{console.log(response.data);
    const fetchdata=[];

    response.data.map((obj)=>fetchdata.push(obj.name,obj.email));
    this.setState({names:fetchdata})


}))
}
render(){


    return(
        
            
       
     this.state.names.map((name)=><Imagebox name={name}/>)
    
     
    )
}


}
export default Imagelist;