import React, { Component } from "react";

class UserGreeting extends Component {
  render() {
    return <h2>Hello, {this.props.firstName} {this.props.lastName}!</h2>;
  }
}

export default UserGreeting;
