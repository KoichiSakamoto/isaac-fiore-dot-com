import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import MyName from './components/MyName'
import Resume from './components/Resume'
import About from './components/About'
import NavigationBar from './components/NavigationBar'

library.add(faLinkedin)

class App extends Component {

  state = {
    display: ""
  }

  changeDisplay = (displayParam) => {
    this.setState({
      display: displayParam
    })
  }

  renderContent = () => {
    switch(this.state.display) {
      case "resume":
        return <Resume />
        break
      case "projects":
        return <div> herpderp u havent made this component yet </div>
        break
      default:
        return <About />
    }
  }

  render() {
    return (
      <div className="App">
        <MyName />
        {this.renderContent()}
        <NavigationBar changeDisplay={this.changeDisplay}/>
      </div>
    );
  }
}

export default App;
