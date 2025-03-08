import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Photographer's Dashboard</h1>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-secondary rounded-md">Create a New Listing</button>
      </div>
    </nav>
  );
};

export default Navbar;
