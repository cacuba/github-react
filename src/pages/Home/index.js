import React from "react";
import Search from "../Search"
import './home.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => (
  <Router>
    <div className="home">
      <Route exact path="/" component={Search} />
    </div>
  </Router>
);

export default Home;
