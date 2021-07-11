import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(props){
  super(props);
  this.yourname = "Rajat";
  this.state = {};
}

sayhello(name){
  return "Hello " + name;
}


  render(){
    const myName = "sammy";
    return(
      <div className="App">
      <h2> Just Liverpool Things: {this.yourname}</h2>
      </div>
    );
  }
}


export default App;
