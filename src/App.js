import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Photos from "./pages/Photos";
import Users from "./pages/Users";
import Analytics from "./pages/Stats"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/users" element={<Users />} />
        <Route path = "/analytics" element={<Analytics/>}/>
      </Routes>
    </Router>
  );
}

export default App;
