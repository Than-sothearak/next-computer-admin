import { FaEarthAfrica } from "react-icons/fa6";
const DashboardPage = () => {
  return (
    <div className="bg-slate-700 mt-4 rounded-lg">
      <div className="flex gap-2">
        <div><FaEarthAfrica /></div>
        <div>
          <h2>Total Users</h2>
          <h1>10,928</h1>
          <p>12% more than previus week</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
