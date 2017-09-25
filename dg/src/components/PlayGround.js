import React, { Component } from 'react'
import './PlayGround.css'

const defaultProps = {
  hero: null,
  bullets: null,
  onCreate: () => console.warn("onCreate should be defined.")
};

class PlayGround extends Component {

  componentDidMount () {
    this.props.onCreate(this.div);
  }

  render () {
    return (
      <div className="PlayGround" ref={div => this.div=div}>
        {this.props.hero}
        {this.props.bullets}
      </div>
    )
  }
}

PlayGround.defaultProps = defaultProps;

export default PlayGround