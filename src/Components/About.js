import React, { Component } from "react";
import Iframe from "react-iframe";

class About extends Component {
  render() {
    return (
      <div>
        <Iframe
          id="myWidget"
          src="https://human.biodigital.com/widget/?m=male_system_muscular_12&dk=1b09dbdde4e4457279fd0413b853c9b31fe5d200"
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
