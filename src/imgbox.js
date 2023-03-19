import React,{Component} from "react";
import './index.css'



class Imagebox extends Component{

        render(props){
                const {name}=this.props;
         console.log(this.props.name);


                return(
               
                 <div >
                        
                     <label > {name}</label>
                     
                      
                 </div>
                )

        }

}

export default Imagebox;
