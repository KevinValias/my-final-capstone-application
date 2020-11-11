import React, { Component } from "react";
import Iframe from "react-iframe";
const dotenv = require("dotenv");
dotenv.config(process.env.REACT_APP_API_KEY);

class About extends Component {
  render() {
    return (
      <div>
        <Iframe
          id="myWidget"
          src="https://human.biodigital.com/widget/?m=male_system_muscular_12&dk=<developer_key>"
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

export default About;