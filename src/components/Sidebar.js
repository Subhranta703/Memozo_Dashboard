import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-5">
      <h2 className="text-lg font-bold mb-5">Photogharh</h2>
      <ul>
        <li className="mb-3"><Link to="/dashboard">Dashboard</Link></li>
        <li className="mb-3"><Link to="/photos">Manage Photos</Link></li>
        <li className="mb-3"><Link to="/users">Manage Users</Link></li>
        <li className="mb-3"><Link to="/stats">Analytics</Link></li> {/* Add this line */}
      </ul>
    </div>
  );
};

export default Sidebar;
