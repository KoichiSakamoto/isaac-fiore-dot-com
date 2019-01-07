import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './components/MyName'
import Resume from './components/Resume'
import About from './components/About'

class App extends Component {


  render() {
    return (
      <div className="App">
        <MyName />
        <About />
      </div>
    );
  }
}

export default App;
