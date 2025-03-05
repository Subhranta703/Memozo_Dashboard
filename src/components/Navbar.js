const Navbar = () => {
    return (
      <div className="w-full bg-gray-800 text-white p-4 flex justify-between">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <div className="flex space-x-4">
          <span>Profile</span>
          <span>Logout</span>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  