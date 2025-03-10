import React from "react";
import "../style/sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>HOME</li>
        <li>BOOKING</li>
        <li>EARNING</li>
        <li>PORTFOLIO</li>
        <li>TEAMS</li>
        <li>Album Manage</li>
        <li>Client & Chart</li>
        <li>Profile</li>
        <li>Business</li>
      </ul>
    </aside>
  );
};

export default Sidebar;