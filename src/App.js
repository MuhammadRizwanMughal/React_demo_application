import React, { Component } from 'react';
import Registation from './Registration/Registration'
import Navbar from './Navigationbar/Navigationbar_view'
import Login from './Login/Login'
import Logout from './Logout/Logout'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Navbar/>
          <Route path="/registration" component={Registation} />
          <Route path="/post" component={() => {return <h1>You are logged in</h1>;}} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route exact path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
