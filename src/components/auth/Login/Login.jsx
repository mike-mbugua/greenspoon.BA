import React from "react";
import "./../signup/Signup.css";

function Login() {
  return (
    <div className="container mt-5 mb-5 d-flex justify-content-center">
      <div className="card px-1 py-4">
        <div className="card-body">
          <div className="d-flex flex-row">
            {" "}
            <label className="radio mr-1"> </label>{" "}
            <label className="radio"> </label>{" "}
          </div>
          <div className="user-icon"></div>
          <h6 className="information mt-4">
            <h2></h2>
            <p>Please Login to access your dashboard</p>
          </h6>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <div className="input-group">
                  {" "}
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Username/Email"
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
          <div className=" d-flex flex-column text-center px-5 mt-3 mb-3">
            {" "}
            <small className="agree-text">
              Do not have an Account ?{" "}
              <a href="/signup">
                <span style={{ color: "#008600" }}>click here</span>
              </a>
            </small>{" "}
            <a href="" className="terms"></a>{" "}
          </div>{" "}
          <button
            className="btn btn-primary btn-block confirm-button "
            id="btn"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
