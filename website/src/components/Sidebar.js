// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Make sure to create a corresponding CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faQuestion,
  faUpload,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
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
        {/* Add more navigation items here */}
      </ul>
    </div>
  );
};

export default Sidebar;
