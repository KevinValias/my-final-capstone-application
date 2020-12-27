import React, { Component } from "react";
import Iframe from "react-iframe";

class About extends Component {
  render() {
    return (
      <div>
        <Iframe
          id="myWidget"
          src="https://human.biodigital.com/widget/?m=male_system_muscular_12&dk=1d95e068addd305cf89e154f04af2f8d747e56a7"
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
