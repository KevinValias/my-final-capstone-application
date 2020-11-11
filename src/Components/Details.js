import React from "react";
import { Container, Typography } from "@material-ui/core";

const Details = (props) => {
  const id = props.match.params.id;
  const region = props.regions.find((regions) => regions.id == id);
  console.log(id);
  return (
    <Container maxWidth="sm" className="car-container">
      <Typography className="car-paper">
        <h2>{region.name}</h2>
        <h4>{region.description}</h4>
        <h4>{region.region}</h4>
        <p>{region.action}</p>
      </Typography>
    </Container>
  );
};

export default Details;
