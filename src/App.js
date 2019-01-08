import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import MyName from './components/MyName'
import Resume from './components/Resume'
import About from './components/About'

library.add(faLinkedin)

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
