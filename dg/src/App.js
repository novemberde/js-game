import React, { Component } from 'react';
import './App.css';
import PlayGround from './components/PlayGround'
import Hero from './components/Hero'
import JoyStick from './components/JoyStick'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Novemberde's Game</h2>
        </div>
        <PlayGround hero={<Hero title="MyHero"/>}/>
        <JoyStick />
      </div>
    );
  }
}

export default App;
