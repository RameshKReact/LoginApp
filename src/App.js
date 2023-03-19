import './App.css';
import { Route, Switch,BrowserRouter as Router} from "react-router-dom";
import Login from './login';
import Mainscreen from './mainscreen';
import Signupfrom from './registrationform';
  




function App() {
  
  return (
    
    <div className="App">
      <Router >
      <Switch>
        <Route path="/" exact component={Login}>
         {/* <Login/> */}
        </Route>
        <Route path="/profile" component={Mainscreen} >
        
          
        
         {/* <Testfile/> */}
        </Route>
        <Route path="/registration" component={Signupfrom} >
        </Route>

       </Switch>
       </Router>
    </div>
  );
}

export default App;
