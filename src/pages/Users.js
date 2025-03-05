import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Users = () => {
  const dummyUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Photographer" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Emily Johnson", email: "emily@example.com", role: "Client" },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <Navbar />
        <h1 className="text-2xl font-bold mt-5">Manage Users</h1>
        <table className="w-full mt-5 border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Role</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user) => (
              <tr key={user.id} className="text-center border">
                <td className="p-2 border">{user.id}</td>
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
