import React, { Component } from 'react'

export default class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello",
        };
        console.log("Constructor");
    }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.changeState}>
            Change state
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  changeState = () => {
    this.setState({
        message: "Hello World",
    });
    console.log("Change state")
  };

  shouldComponentUpdate(newPróp, newState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch");
  }
}


