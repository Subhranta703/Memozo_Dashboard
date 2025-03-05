import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", income: 500, engagement: 200 },
  { month: "Feb", income: 800, engagement: 300 },
  { month: "Mar", income: 1200, engagement: 500 },
  { month: "Apr", income: 1500, engagement: 600 },
  { month: "May", income: 1800, engagement: 700 },
  { month: "Jun", income: 2100, engagement: 900 },
];

const Stats = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <Navbar />
        <h1 className="text-2xl font-bold mt-5">Analytics - Income & Engagement</h1>
        
        {/* Line Chart - Income */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Income Over Months</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Engagement */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold">User Engagement</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="engagement" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
