import React, { Component } from 'react';
import Registation from './Registration/Registration'
import Login from './Login/Login'
import Logout from './Logout/Logout'
import Home from './Home/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/registration" component={Registation} />
          <Route path="/post" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route exact path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
