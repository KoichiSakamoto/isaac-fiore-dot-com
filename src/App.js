import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hey Buddy </h1>
        <WelcomePage />
      </div>
    );
  }
}

export default App;
