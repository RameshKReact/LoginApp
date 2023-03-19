import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import './index.css'
class Signupfrom extends Component{

    render(){
          
        const RegisterClick=(e)=>{
           
            this.props.history.push('/');
        }

        
        return(

            <div className="form">
                <h2>Registration from</h2>
                
             <h4>Hurry up !  <br/>50% off on Signup available till March 18, 2023</h4>
            <form>
                
                FirstName:<input type="text" placeholder="Vore Nom"/> <br/>
                LastName:<input type="text" placeholder="Nom de familie"/> <br/>
                email:<input type="text" placeholder="example@domain.com"/> <br/>
                Password:<input type="password" placeholder="must be 8 digits"/> <br/>
                Confirm Password:<input type="password" placeholder="re-enter password"/> <br/>
                
               
                <br/>
                
               
                <button onClick={RegisterClick} type="Submit">Register Now</button>
               
                <h5>Bonne Journee!</h5>
               

            </form>
            


         </div>
            
        )
    }
}

export default withRouter(Signupfrom);