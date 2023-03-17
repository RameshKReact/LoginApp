import React,{Component}from "react";
import { withRouter } from 'react-router-dom';
import './index.css'
class Login extends Component{

   
    render(){

       
   
        const handleClick=(e)=>{
            e.preventDefault();
            this.props.router.push('/profile');

        }


        return(


          <div className="form">
            <form>
                
                UserName:<input type="text" placeholder="use email/card number"/> <br/>
                Password:<input type="text" placeholder="**********"/> <br/>
                <br/>
                <button onClick={handleClick} type="Submit" >Login Now</button>
                
               

            </form>
            


         </div>


        )
    }



    
}
export default withRouter(Login);