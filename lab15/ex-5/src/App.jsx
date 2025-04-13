import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called");
    console.log("Previous state:", prevState);
    console.log("Current state:", this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  updateState = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("Render called");
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.updateState}>Update State</button>
      </div>
    );
  }
}

// Parent component to demonstrate unmounting
class LifecycleDemoContainer extends Component {
  state = {
    showDemo: true,
  };

  toggleDemo = () => {
    this.setState((prevState) => ({
      showDemo: !prevState.showDemo,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleDemo}>
          {this.state.showDemo ? "Unmount Component" : "Mount Component"}
        </button>
        {this.state.showDemo && <LifecycleDemo />}
      </div>
    );
  }
}

export default LifecycleDemoContainer;
