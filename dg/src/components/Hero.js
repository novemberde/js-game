import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const defaultProps = {
  title: "hero",
  width: null,
  height: null,
  top: null,
  left: null,
  onCreate: () => console.warn("onCreate should be defined")
};

class Hero extends Component {
  componentWillMount () {
    this.props.onCreate(this);
  }

  render () {
    const style = {
      width: this.props.width,
      height: this.props.height,
      top: this.props.top,
      left: this.props.left,
      color: "blue",
      position: "relative",
      backgroundColor: "yellow"
    };
    return (
      <span style={style}>
        {this.props.title}
      </span>
    )
  }
}

Hero.defaultProps = defaultProps;

export default Hero