import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Add = (props) => {
  const [listing, setListing] = useState({
    name: "",
    description: "",
    region: "",
    action: "",

    redirect: false,
  });

  const handleTextChange = (e) => {
    const newListing = { ...listing };
    newListing[e.target.id] = e.target.value;
    setListing(newListing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...listing };
    payload.id = props.regions.length + 1;
    props.addRegion(payload);
    setListing({
      redirect: true,
    });
  };

  return (
    // <Container maxWidth="sm" className="add-form">
    <div className="add-auth-wrapper">
      <div className="add-auth-inner">
        <h1>--ADD A REGION--</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleTextChange}
            placeholder={"Name"}
            fullWidth={true}
            id="name"
          />
          <TextField
            onChange={handleTextChange}
            placeholder={"Description"}
            fullWidth={true}
            id="description"
          />
          <TextField
            onChange={handleTextChange}
            placeholder={"Region"}
            fullWidth={true}
            id="region"
          />
          <TextField
            onChange={handleTextChange}
            placeholder={"Action"}
            fullWidth={true}
            id="action"
          />
          <Button
            variant="contained"
            className="button"
            type="submit"
            size="small"
            style={{
              paddingLeft: 150,
              paddingRight: 150,
              marginTop: 25,
              marginBottom: 30,
              marginLeft: 2,
            }}
            onClick={handleSubmit}
          >
            Save
          </Button>
          {listing.redirect && <Redirect to="/dashboard" />}
        </form>
      </div>
    </div>

    // </Container>
  );
};

export default Add;
