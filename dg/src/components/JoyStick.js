import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Icon, Grid, Button } from 'semantic-ui-react'
import './JoyStick.css'

const defaultProps = {
  hero: null,
};

class JoyStick extends Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <Grid.Row style={{height: "30%"}} columns={2} className="JoyStick">
        <Grid.Column>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column></Grid.Column>
              <Grid.Column>
                {/* <Button icon="chevron up" size="big"  onTouchStart={this.props.onUp} onTouchEnd={this.props.onStopY}/> */}
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column><Button icon="chevron left" size="big" onTouchStart={this.props.onLeft} onTouchEnd={this.props.onStopX}/></Grid.Column>
              {/* <Grid.Column><Button icon="chevron down" size="big" onTouchStart={this.props.onDown} onTouchEnd={this.props.onStopY}/></Grid.Column> */}
              <Grid.Column><Button icon="chevron right" size="big" onTouchStart={this.props.onRight} onTouchEnd={this.props.onStopX}/></Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <Grid.Column>
              <Grid>
                <Grid.Row columns={3}>
                  <Grid.Column></Grid.Column>
                  <Grid.Column>
                    {/* <Button icon="chevron up" size="big"  onTouchStart={this.props.onUp} onTouchEnd={this.props.onStopY}/> */}
                  </Grid.Column>
                  <Grid.Column></Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Button icon="add" size="big" onTouchStart={this.props.onPlus}/> 
                  </Grid.Column>
                  <Grid.Column>
                    <Button icon="x" size="big"/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default JoyStick
