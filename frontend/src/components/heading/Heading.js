import { data } from "jquery";
import React, { Component } from "react";
export default class Heading extends Component {
  render() {
    return (
      <h1 className="h1" style={{ fontSize: `${this.props.size}` }}>
        {this.props.content}
      </h1>
    );
  }
}
