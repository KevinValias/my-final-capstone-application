import React, { Component } from "react";
import Iframe from "react-iframe";
const dotenv = require("dotenv");
dotenv.config(process.env.REACT_APP_API_KEY);

class RegionOne extends Component {
  render() {
    return (
      <div>
        <Iframe
          id="myWidget"
          src={`${process.env.REACT_APP_API_KEY}`}
          //Line 12 is how I have been able to access my API to deliver my content for my specific REGION //
          width="100%"
          height="90%"
          position="fixed"
          marginBottom="100px"
          styles={{ height: "25px" }}
          allowFullScreen
        />
      </div>
    );
  }
}

export default RegionOne;
