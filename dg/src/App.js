import React, { Component } from 'react';
import { Container, Header, Divider, Grid, Icon, Button } from "semantic-ui-react";
import { connect } from 'react-redux'
import './App.css';
import PlayGround from './components/PlayGround'
import Hero from './components/Hero'
import JoyStick from './components/JoyStick'
import hitTest from './lib/hitTest'
import Bullet from './components/Bullet'

class App extends Component {
  constructor (props, context) {
    super(props, context)
    
    this.state = {
      hero: {
        top: 0,
        left: 0,
        height: 20,
        width: 0
      },
      playGround: {
        height: 0,
        width: 0
      },
      bullets: [
        // {
        //   key: 123
        //   top: 0,
        //   left: 0
        // }
      ]
    };

    this.stepX = 0;
    this.stepY = 0;
    this.velY = 0;
    this.step = 2;
    this.gravity = 0.04;
    this.jumpForce = -8;
    this.bulletVelX = 5;
    this.isOnShot = false;
    this.shotCount = 0;
    this.shotInterval = 20;

    this.hero = null;

    this.setHero = this.setHero.bind(this);
    this.intervalFunction = this.intervalFunction.bind(this);
    this.handleHeroLeft = this.handleHeroLeft.bind(this);
    this.handleHeroRight = this.handleHeroRight.bind(this);
    this.handleHeroUp= this.handleHeroUp.bind(this);
    this.handleHeroDown = this.handleHeroDown.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleHeroStopX = this.handleHeroStopX.bind(this);
    this.handleHeroStopY = this.handleHeroStopY.bind(this);
    this.handleHeroJump = this.handleHeroJump.bind(this);
    this.mapToBullet = this.mapToBullet.bind(this);
  }

  componentDidMount () {
    setInterval(this.intervalFunction, 20);

    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  intervalFunction () {
    this.velY += this.gravity;
    
    this.stepY = (this.state.hero.top + this.stepY> this.state.playGround.height-this.state.hero.height? 0: this.stepY + this.velY);

    // const bullets = this.state.bullets.map((b) => {
    //   b.left += this.bulletVelX;
    //   return b;
    // });
    const bullets = [];
    const preBullets = this.state.bullets;
    const playGroundWidth = this.state.playGround.width;

    for(let i=0; i<preBullets.length; i++) {
      const b = preBullets[i];

      b.left += this.bulletVelX;

      if(b.left>((playGroundWidth/2)-20)) {
        continue;
      }

      bullets.push(b);
    }

    if(this.isOnShot) {
      if(this.shotCount<this.shotInterval) this.shotCount++;
      else {
        this.shotCount=0;
        bullets.push({
          key: (Math.floor(Math.random() * 10000)),
          top: this.state.hero.top,
          left: this.state.hero.left
        })
      }
    }

    this.setState({
      hero: {
        ...this.state.hero,
        top: this.state.hero.top + this.stepY,
        left: this.state.hero.left + this.stepX,
      },
      bullets
    });
  }

  setPlayGroundSize (p) {
    const playGround = {
      height: p.clientHeight,
      width: p.clientWidth
    };

    return this.setState({
      playGround
    });
  }

  setHero (hero) {
    this.hero = hero;
  }
  
  handleHeroStopX () {
    this.stepX = 0;
  }

  handleHeroStopY () {
    this.stepY = 0;
  }

  handleHeroLeft () {
    this.stepX = -this.step;
  }

  handleHeroRight () {
    this.stepX = this.step;
  }

  handleHeroUp () {
    this.stepY = -this.step;
  }

  handleHeroDown () {
    this.stepY = this.step;
  }

  handleHeroJump () {
    this.stepY = this.jumpForce;
    this.velY = 0;
  }

  handleKeyDown (e) {
    const code = e.keyCode;

    switch (code) {
      case 65: this.isOnShot=true; break;
      case 37: this.handleHeroLeft(); break;
      // case 38: this.handleHeroUp(); break;
      case 39: this.handleHeroRight(); break;
      // case 40: this.handleHeroDown(); break;
      default: break;
    }
  }

  handleKeyUp (e) {
    const code = e.keyCode;
    
    switch (code) {
      case 65: this.isOnShot=false; break;
      case 83: this.handleHeroJump(); break;// space bar
      case 37: this.handleHeroStopX(); break;
      // case 38: this.handleHeroStopY(); break;
      case 39: this.handleHeroStopX(); break;
      // case 40: this.handleHeroStopY(); break;
      default: break;
    }
  }

  mapToBullet () {
    return this.state.bullets.map((b, i) => {
      return <Bullet key={b.key} top={b.top} left={b.left}/>
    });
  }

  render() {
    const heroComponent = (
      <Hero title="Warrior" 
        onCreate={this.setHero}
        top={`${this.state.hero.top}px`} 
        left={`${this.state.hero.left - this.state.hero.width}px`}/>
    );
    const bulletComponent = this.mapToBullet(this.state.bullets);

    return (
      <Container className="App">
        {/* <div className="App-header">
          <h2>Novemberde's Game</h2>
        </div>
        <PlayGround hero={<Hero title="MyHero"/>}/>
        <JoyStick /> */}
        <Divider horizontal>SHOOTING GAME</Divider>
        <Grid style={{margin: "auto", height: "90%"}}>
          <Grid.Row style={{margin: "auto", height: "70%"}}>
            <PlayGround hero={heroComponent} bullets={bulletComponent} onCreate={p => this.setPlayGroundSize(p)}/>
          </Grid.Row>
          <JoyStick 
            onLeft={this.handleHeroLeft} 
            onRight={this.handleHeroRight} 
            onUp={this.handleHeroUp} 
            onDown={this.handleHeroDown} 
            onStopX={this.handleHeroStopX}
            onStopY={this.handleHeroStopY}
            onPlus={this.handleHeroJump}/>
        </Grid>
      </Container>
    );
  }
}

export default App;

