import React from "react";
import "./Navbar.css";
import { bridal } from "../../assets";

const Navbar = () => {
  return (
    <header className="header">

      {/* TOP BAR */}
      <div className="top-bar">
        <div className="nav-container">
          <span>Customer Home</span>
          <nav>
            <a href="#">Best Sellers</a>
            <a href="#">Gift Ideas</a>
            <a href="#">New Releases</a>
            <a href="#">Today's Deals</a>
            <a href="#">Customer Service</a>
          </nav>
        </div>
      </div>

      {/* NAVBAR */}
      {/* NAVBAR */}
<div className="navbar">
  <div className="nav-container navbar-row">

    <div className="logo">
      ShringarVastra
    </div>

    <div className="search-box">
      <select>
        <option>All Category</option>
      </select>
      <input type="text" placeholder="Search this blog" />
      <button>🔍</button>
    </div>

    <div className="nav-right">
      <select>
        <option>English</option>
        <option>Nepali</option>
      </select>
      <span className="cart">🛒 CART</span>
    </div>

  </div>
</div>


      {/* HERO */}
      <div className="hero">
        <img src={bridal} alt="Bridal" className="hero-img" />
        <div className="hero-content">
          <h1>
            WHERE TRADITION MEETS <br /> ELEGANCE
          </h1>
          <button className="buy-btn">BUY NOW</button>
        </div>
      </div>

    </header>
  );
};

export default Navbar;
