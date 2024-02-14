import "./Navbar.css";
import "../App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => {
    setClick(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            Name
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/generate" className="nav-links" onClick={closeMenu}>
                Generate
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/help" className="nav-links" onClick={closeMenu}>
                Help
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
