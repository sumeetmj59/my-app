import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeDetails from './mycomponents/EmployeeDetails';
import LoginForm from "./mycomponents/LoginForm";
import updateComponent from './mycomponents/updateComponent';
function App() {
  return ( 
    <Router>
      <div classname="App">
      <Switch>
        <Route exact path="/LoginForm" component={LoginForm}/>

        <Route exact path="/EmployeeDetails" component={EmployeeDetails}/>

        <Route exact path="/updateComponent" component={updateComponent} />
    </Switch>
    </div>
    </Router>
    );
  }
export default App;



