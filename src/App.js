import React, { Component } from 'react';
import Aboutme from './aboutme'
import Skills from './skills'
import Contact from './contact'
import Projects from './projects'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: "Aboutme",
    }
  }

  handleChangeView = (e) => {
    this.setState({
      currentView: e.target.id,
    })
  }

  render() {
    if(this.state.currentView==="Aboutme"){
      return(
        <div className="container">
          <Aboutme handleClick={this.handleChangeView}/>
        </div>
      )
    }  
    else if(this.state.currentView==="Skills"){
      return(
        <div className="container">
          <Skills handleClick={this.handleChangeView} />
        </div>
      )
    }
    else if(this.state.currentView==="Projects"){
      return(
        <div className="container">
          <Projects handleClick={this.handleChangeView} />
        </div>
      )
    }
    else{
      return (
        <div className="container">
          <Contact handleClick={this.handleChangeView}/>
        </div>
      )
    }
    
  }
}

export default App;
