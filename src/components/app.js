import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <ul className="header">
          <li><a href="/">Home</a></li>
          <li><a herf="/stuff">Stuff</a></li>
          <li><a herf="/contact">Contact</a></li>
        </ul>
        <div className="content">

        </div>
      </div>
  );
  }
}

export default App;
