import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Heading from "../../components/heading/Heading"
export default class ToggalLoginAndSignup extends Component {
  render() {
    return (
      
      <div className="container">
        <div className="content">
          <div className="content_lft">
            <Heading content="Welcome from PPL!" size="36px" />
            <p className="discrptn">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.{" "}
            </p>
            <img src="./images/img_9.png" alt="" />{" "}
          </div>
          <Login />
        </div>
      </div>
    );
  }
}
