import React,{Component} from "react";
import NavScrollExample from "./navbar";
import Imagebox from "./imgbox";
import Imagelist from "./imagelist";
import './index.css'
import { withRouter } from 'react-router-dom';
class Mainscreen extends Component{


    render(){


        return(
         <div className="display">
            <div>
                <NavScrollExample></NavScrollExample>
            </div>
            <div>

                <Imagelist></Imagelist>
            </div>
            
                <pre>

                ramesh <br/>
                is<br/>
                working <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                on react<br/>
                aplication<br/><br/>
                <br/><br/><br/><br/>
                from 2 hours<br/>
                <br/>
                thank you <br/>
                <br/>
                so <br/>
                much <br/>
                <br/><br/><br/><br/>
                <br/>
                <br/>
                <br/>
                <br/>
               hereee<br/>

               <br/>
               yu  
               <br/>

               <br/>


               are
                </pre>
               
            
         </div>

        )
    }

    
}
export default withRouter(Mainscreen);