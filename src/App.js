import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: "rgb(185 188 201)", height: "100%" }}>
          <Navbar />
          <News />
        </div>
      </>
    );
  }
}
