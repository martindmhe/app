import React, { useState } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  const [loggedin, setLoggedin] = useState(false);
  const [username, setUsername] = useState("Aurora");
  return (
    <>
      <div className="Home-container">
        <div className="title-container">
          <h3>Welcome to RizzGPT!</h3>
          <p>
            Have you ever recieved a text message you didn't know how to respond
            to? No worries! Simply upload your chat history and generate a
            personalized, hassle-free response on our website!
          </p>

          {loggedin ? (
            <>
              <p style={{ marginBottom: "25px" }}>
                Hi {username}! Please upload your data if you have not done so.
              </p>
            </>
          ) : (
            <>
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Homepage;
