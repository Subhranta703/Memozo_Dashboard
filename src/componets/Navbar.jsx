import React from "react";
import "../style/navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Vexa Click</h1>
      <div className="nav-items">
        <button className="btn-booking">+ New Booking</button>
      </div>
    </nav>
  );
};

export default Navbar;
