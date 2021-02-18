import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Heading from "../../../../components/heading/Heading";
import FormInput from "../../../../components/forms/Form";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      error: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:3002/auth/signup", this.state)
      .then((response) => {
        if (!response.data._id) {
          this.setState({
            error: "User already exist",
          });
        } else {
          this.setState({
            error: "",
          });
          localStorage.setItem("id",response.data._id);
          localStorage.setItem("username",response.data.username);
          this.props.history.push("/timeline");
        }
      });
  };

  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <div className="content_rgt">
          <div className="register_sec">
            <Heading content="Create an account" size="30px" />
            <form onSubmit={this.submit}>
              <ul>
                <li>
                  <FormInput
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    onchange={this.handleChange}
                  />
                </li>
                <li>
                  <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="enter password"
                    onchange={this.handleChange}
                  />
                </li>
                <li>
                  <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onchange={this.handleChange}
                  />
                </li>
                <li>
                  <FormInput
                    label="Firstname"
                    name="firstname"
                    type="text"
                    placeholder="Enter your first name"
                    onchange={this.handleChange}
                  />
                </li>
                <li>
                  <FormInput
                    label="Lastname"
                    name="lastname"
                    type="text"
                    placeholder="Enter your last name"
                    onchange={this.handleChange}
                  />
                </li>
                <li>
                  <input type="checkbox" required />I agree to Term &amp;
                  Conditions
                </li>
                <p style={{ color: "red" }}>{this.state.error}</p>
                <li>
                  <input type="submit" />
                </li>
              </ul>
              <div className="addtnal_acnt">
                I already have an account.
                <a>
                  <Link to="/login">Login My Account !</Link>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
