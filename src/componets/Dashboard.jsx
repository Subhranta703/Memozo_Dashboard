import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Earnings from "./Earnings";
import BookingSummary from "./BookingSummary";
import Schedule from "./Schedule";
//import Notifications from "./Notifications";
import "../style/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="dashboard-main">
          <div className="stats-container">
            <Earnings />
            <BookingSummary />
          </div>
          <Schedule />
          {/* <Notifications /> */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
