import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Photos from "../pages/Photos";
import Users from "../pages/Users"; 
import Stats from "../pages/Stats";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/users" element={<Users />} />
        <Route path="/stats" element={<Stats />} /> {/* Graph Section */}
      </Routes>
    </Router>
  );
}

export default App;
