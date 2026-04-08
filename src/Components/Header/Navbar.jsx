import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/final-logo-1.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const clkQut = () => {
    navigate("/GetAQuote");
    setMenuOpen(false); // close menu after click
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Company Logo" />
        </Link>
      </div>

      {/* Hamburger */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu */}
      <nav className={`navbar__links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={()=>setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/Aboutus" onClick={()=>setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/services" onClick={()=>setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/Material" onClick={()=>setMenuOpen(false)}>Material</Link></li>
        </ul>
      </nav>

      {/* Desktop Button */}
      <div className="navbar__actions">
        <button className="btn primary" onClick={clkQut}>
          GET A QUOTE
        </button>
      </div>

    </header>
  );
};

export default Navbar;