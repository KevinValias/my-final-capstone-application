import React, { Component } from "react";
import Iframe from "react-iframe";

class RegionThree extends Component {
  render() {
    return (
      <div>
        <Iframe
          id="myWidget"
          src="https://human.biodigital.com/widget/?m=male_region_upper_limb_12&dk=034caada11965ad1a6e226ccb1844db9ede0c1cc"
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

export default RegionThree;
