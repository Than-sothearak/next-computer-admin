import { FaEarthAfrica } from "react-icons/fa6";
const DashboardPage = () => {
  return (
    <div className="mt-4 rounded-lg flex gap-4">
      <div className="flex gap-2 p-4 bg-slate-800 rounded-md ">
        <div><FaEarthAfrica /></div>
        <div>
          <h2>Total Users</h2>
          <h1>10,928</h1>
          <p>12% more than previus week</p>
        </div>
      </div>

      <div className="flex gap-2 p-4 bg-slate-800">
        <div><FaEarthAfrica /></div>
        <div>
          <h2>Total Users</h2>
          <h1>10,928</h1>
          <p>12% more than previus week</p>
        </div>
      </div>

      <div className="flex gap-2 p-4 bg-slate-800">
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
