import logo from './logo.svg';
import './App.css';
import  NavScrollExample from './navbar';
import { MemoryRouter } from 'react-router';
import { Route, Switch,BrowserRouter as Router} from "react-router-dom";
import history from './history';
import Login from'./login';
import Testfile from './test';

function App() {
  
  return (
    
    <div className="App">
      <Router >
      <Switch>
        <Route path="/" exact component={Login}>
         {/* <Login/> */}
        </Route>
        <Route path="/profile" component={Testfile} >
         {/* <Testfile/> */}
        </Route>
       </Switch>
       </Router>
    </div>
  );
}

export default App;
