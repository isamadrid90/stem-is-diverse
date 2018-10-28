import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import People from './components/People';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/people">People</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/people" component={People}/> 
          </div>
        </div>
      </HashRouter>
      );
  }
}

export default App;
