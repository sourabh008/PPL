import React, { Component } from "react";
import { Link,withRouter } from "react-router-dom";
import Heading from "../../../../components/heading/Heading";
import axios from "axios";
import FormInput from "../../../../components/forms/Form";
 class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    axios.post("http://localhost:3002/auth/", this.state).then((response) => {
      if (!response.data._id) {
        this.setState({
          error: "Wrong Email or Password",
        });
      } else {
       
        localStorage.setItem("id",response.data._id);
        localStorage.setItem("username",response.data.username);

        this.setState({
          error: "",
        });
        this.props.history.push("/timeline");
      }
      console.log(response);
    });
  };
  render() {
    return (
      <div>
        <div className="content_rgt">
          <div className="login_sec">
            <Heading content="Log In" size="36px" />
            <form onSubmit={this.submit}>
              <ul>
              <li>
                  {" "}
                  <FormInput 
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onchange={this.handleChange}
                  />
                </li>
                <li>
                  {" "}
                  <FormInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="enter password"
                    onchange={this.handleChange}
                  />
                </li>
                
                <li>
                  <input
                    type="checkbox"
                    onChange={this.handleChange}
                    required
                  />
                  Remember Me
                </li>
                <p style={{ color: "red" }}>{this.state.error}</p>
                <li>
                  <input type="submit" defaultValue="Log In" />
                  <a href>Forgot Password</a>
                </li>
              </ul>
            </form>
            <div className="addtnal_acnt">
              I do not have any account yet.
              <a href>
                <Link to="/">Create My Account Now !</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login)