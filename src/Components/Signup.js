import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div className="sign-up-auth-wrapper">
        <div className="sign-up-auth-inner">
          <form>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter First name"
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last name"
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Name Of City"
              />
            </div>
            <div className="form-group">
              <label>ZipCode</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter ZipCode"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
