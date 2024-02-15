// Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Make sure to create a corresponding CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faQuestion,
  faUpload,
  faComment,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [loggedin, setloggedin] = useState(true);
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>Logo</h2> {/* Replace with your logo */}
      </div>
      <ul className="sidebar-nav">
        <Link to="/" className="nav-links">
          <div className="nav-item">
            <FontAwesomeIcon className="icons" icon={faHouseChimney} />
            Home
          </div>
        </Link>
        <Link to="/upload" className="nav-links">
          <div className="nav-item">
            <FontAwesomeIcon className="icons" icon={faUpload} />
            Upload
          </div>
        </Link>
        <Link to="/generate" className="nav-links">
          <div className="nav-item">
            <FontAwesomeIcon className="icons" icon={faComment} />
            Generate
          </div>
        </Link>
        <Link to="/help" className="nav-links">
          <div className="nav-item">
            <FontAwesomeIcon className="icons" icon={faQuestion} />
            Help
          </div>
        </Link>
        {loggedin ? (
          <>
            {" "}
            <div className="nav-links">
            <div style={{color: "#a12349"}} className="nav-item">
              <FontAwesomeIcon className="icons" style={{color: "#a12349"}}icon={faArrowRightFromBracket} />
              Log out
            </div>
            </div>
          </>
        ) : (
          <></>
        )}
        {/* Add more navigation items here */}
      </ul>
    </div>
  );
};

export default Sidebar;
