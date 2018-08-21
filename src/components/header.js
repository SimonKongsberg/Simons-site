import React, {Component} from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

class header extends Component {
    render() {
      return (
        <HashRouter>
          <div className="nav">
                <ul className="header">
                    <h1 className="header--title">Hello world</h1>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
          </div>
          </HashRouter>
      );
    }
  }
export default header;