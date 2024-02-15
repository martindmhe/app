import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Register() {
  return (
    <div className="generate">
        <div className="login-container">
      <div className="form-container">
        <p className="title">Register</p>
        <form className="form">
        <div className="input-group">
            <label for="username">Full Name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter Full Name..."
            ></input>
          </div>
          <div className="input-group">
            <label for="username">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email..."
            ></input>
          </div>
          <div className="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Set Password..."
            ></input>
          </div>
          <button className="sign" style={{marginTop: "20px"}}>Register</button>
        </form>
        <p className="signup">
          Already have an account? {" "}
          <Link to='/Login'>
          <a rel="" href="" className="">
            Login
          </a>
          </Link>
        </p>
      </div>
      </div>
    </div>
  )
}

export default Register