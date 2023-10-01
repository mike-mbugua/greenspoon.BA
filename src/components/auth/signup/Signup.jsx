import React from "react";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"; // Import a specific icon

// ...

function Signup() {
  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center">
      <div className="card px-1 py-4">
        <div className="card-body">
          <div className="d-flex flex-row">
            {" "}
            <label className="radio mr-1"> </label>{" "}
            <label className="radio"> </label>{" "}
          </div>
          <div className="user-icon">
            <FontAwesomeIcon icon={faUserPlus} size="3x" color="#008600" />
          </div>
          <h6 className="information mt-4">
            <h2>Welcome New BA</h2>
            <p>Please register to access your dashboard</p>
          </h6>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                />{" "}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <div className="input-group">
                  {" "}
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Mobile"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <div className="input-group">
                  {" "}
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Email address"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <div className="input-group">
                  {" "}
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <div className="input-group">
                  {" "}
                  <input
                    className="form-control"
                    type="password"
                    placeholder="confirm password"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className=" d-flex flex-column text-center px-5 mt-3 mb-3">
            {" "}
            <small className="agree-text">
              By Registering you agree to{" "}
              <span style={{ color: "#008600" }}>greenspoon</span>
            </small>{" "}
            <a href="#" className="terms">
              <span style={{ color: "#008600" }}>Terms and conditions</span>
            </a>{" "}
          </div>{" "}
          <button
            className="btn btn-primary btn-block confirm-button "
            id="btn"
          >
            Register
          </button>
          <span className="terms">
            Already have an Account <a href="/login">Click here</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
