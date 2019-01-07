import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './components/MyName'
import Resume from './components/Resume'

class App extends Component {


  render() {
    return (
      <div className="App">
        <MyName />
        
      </div>
    );
  }
}

export default App;
