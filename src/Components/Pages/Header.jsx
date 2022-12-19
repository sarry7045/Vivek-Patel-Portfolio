import { Menu } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src="./Images/logo.png" alt="" data-aos="zoom-in-right" />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            <Link to="/" data-aos="zoom-in-left">
              Home
            </Link>
            <Link to="/services" data-aos="zoom-in-left">
              Services
            </Link>
            <Link to="/portfolio" data-aos="zoom-in-left">
              Portfolio
            </Link>
            <Link to="/blog" data-aos="zoom-in-left">
              Blog
            </Link>
            <Link to="/Contact" data-aos="zoom-in-left">
              Contact
            </Link>
          </div>
          <button className="toggle" onClick={() => setResponsive(!responsive)}>
            <Menu className="icon" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
