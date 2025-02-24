import { FaEarthAfrica } from "react-icons/fa6";
const DashboardPage = () => {
  return (
    <div className="mt-4 rounded-lg flex gap-4">
      <div className="w-full justify-start items-start flex gap-2 p-4 bg-slate-800 rounded-lg ">
        <div><FaEarthAfrica /></div>
        <div>
          <h2>Total Users</h2>
          <h1 className="text-2xl font-bold">10,928</h1>
          <p>12% more than previus week</p>
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;
