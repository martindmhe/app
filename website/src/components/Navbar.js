import "./Nav.css";
import "../App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Nav() {
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
            Aurora Shi
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#home");
              }}
            >
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#about");
              }}
            >
              <Link className="nav-links" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-links" onClick={closeMenu}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/works" className="nav-links" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
