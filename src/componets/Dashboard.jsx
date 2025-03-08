import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Earnings from "./Earnings";
import TodayWork from "./TodayWork";
import BookingRequests from "./BookingRequests";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Earnings />
            <TodayWork />
            <BookingRequests />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
