import React from "react";
import "./App.css";
import Landing_page from "./screens/landing_page/Landing_page";
import Footer from "./screens/components/footer/Footer";
import Navbar from "./screens/components/navbar/Navbar";
import {BrowserRouter, Route, Switch ,Router} from "react-router-dom";
import Timeline from "./screens/timeline/Timeline";
import Login_home from "./screens/login_home/Login_home";

function App() {
const id=localStorage.getItem("id")
    return (
      <BrowserRouter>
        <Navbar />
      <Switch>       
          <Route exact path="/" component={Landing_page} />  
          <Route path="/timeline" component={Timeline} />
          <Route path="/login" component={Login_home} />
        </Switch>
      
        <Footer />
      </BrowserRouter>
    );
  
}
// camel case notation
export default App;
