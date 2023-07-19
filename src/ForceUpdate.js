import React, { Component } from 'react'

export default class ForceUpdate extends Component {
  render() {
    return (
      <div>
        <h1>Random number: {Math.random()}</h1>
        <button onClick={() => this.forceUpdate()}>Refresh</button>
      </div>
    )
  }
}
