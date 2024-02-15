import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="generate">
        <div className="login-container">
      <div className="form-container">
        <p className="title">Login</p>
        <form className="form">
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
              placeholder="Enter Password..."
            ></input>
            <div className="forgot">
              <a rel="noopener noreferrer" href="">
                Forgot Password ?
              </a>
            </div>
          </div>
          <button className="sign">Sign in</button>
        </form>
        <p className="signup">
          Don't have an account? {" "}
          <Link to='/register'>
          <a rel="" href="" className="">
            Register
          </a>
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
}

export default Login;
