import React, { Component } from 'react';
import Registation from './Registration/Registration'
import Navbar from './Navigationbar/Navigationbar_view'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Registation/>
        <Router>
          <Route path="/Registration/" component={Registation} />
        </Router>
      </div>
    );
  }
}

export default App;
