import React,{Component}from "react";
import { withRouter } from 'react-router-dom';
import './index.css'
class Login extends Component{

   
    render(){

       
   
        const handleClick=(e)=>{
           
            this.props.history.push('/profile');

        }

        const signupClick=(e)=>{
           
            this.props.history.push('/registration');
        }


        return(


          <div className="form">
            <h2>Welcome to React</h2>
            <h4>Hey! Good to see you back.</h4>
            <form>
                
                UserName:<input type="text" placeholder="use email/card number"/> <br/>
                Password:<input type="text" placeholder="**********"/> <br/>
                <br/>
                
                <button onClick={handleClick} type="Submit" >Login Now</button>
                <button onClick={signupClick} type="Submit" >Sign Up</button>
               
                
               

            </form>
            


         </div>


        )
    }



    
}
export default withRouter(Login);