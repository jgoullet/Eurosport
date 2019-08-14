import React, { Component } from 'react';
import GetOnlinePlayers from './components/OnlinePlayers/GetOnlinePlayers';
import './App.scss';

class App extends Component {
  render(){
  return (
    <div className="App">
      <h1 className="header">Top Players</h1>
      <GetOnlinePlayers />
    </div>
  );
  }
}

export default App;
