import React, { Component } from "react";
import Iframe from "react-iframe";
// import { Container } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <div>
        <Iframe
          src="https://www.youtube.com/embed/rMcg9YzNSEs?start'5'"
          frameborder="100px"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          position="absolute"
          width="100%"
          height="100%"
          styles={{ height: "25px" }}
          allowFullScreen
        />
      </div>
    );
  }
}
export default Home;
