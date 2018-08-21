import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import home from "./home";
import stuff from "./stuff";
import contact from "./contact";
import logo from '../assets/images/logo.svg';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <div className="content">
            <Route exact path="/" component={home}/>
            <Route path="/stuff" component={stuff}/>
            <Route path="/contact" component={contact}/>
          </div>
      </HashRouter>
  );
  }
}

export default App;
