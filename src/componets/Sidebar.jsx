import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-primary text-white p-6 hidden md:block">
      <ul className="space-y-4">
        <li className="hover:text-secondary cursor-pointer">Bookings</li>
        <li className="hover:text-secondary cursor-pointer">Portfolio</li>
        <li className="hover:text-secondary cursor-pointer">Earnings</li>
        <li className="hover:text-secondary cursor-pointer">Teams</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
