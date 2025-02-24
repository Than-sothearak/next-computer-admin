import LineChartComponent from "@/components/LineChartComponent";
import Chart from "@/components/LineChartComponent";
import { latestTransactions } from "@/data/lastTransactions";
import { FaEarthAfrica } from "react-icons/fa6";
const DashboardPage = () => {

  const statusColors = {
    Completed: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Failed: "bg-red-100 text-red-700",
    Refunded: "bg-blue-100 text-blue-700",
  };
  return (
 <>
    <div className="mt-4 rounded-lg flex max-sm:flex-wrap gap-4">
      <div className="w-full justify-start items-start flex gap-4 p-4 bg-slate-800 rounded-lg ">
        <div><FaEarthAfrica /></div>
        <div className="flex flex-col gap-4">
          <h2>Total Users</h2>
          <h1 className="text-2xl font-bold">10,928</h1>
          <p className="text-green-500 text-xs">12% <span className="text-white">more than previus week</span></p>
        </div>
      </div>

      <div className="w-full justify-start items-start flex gap-4 p-4 bg-slate-800 rounded-lg ">
        <div><FaEarthAfrica /></div>
        <div className="flex flex-col gap-4">
          <h2>Total Users</h2>
          <h1 className="text-2xl font-bold">10,928</h1>
          <p className="text-green-500 text-xs">12% <span className="text-white">more than previus week</span></p>
        </div>
      </div>

      <div className="w-full justify-start items-start flex gap-4 p-4 bg-slate-800 rounded-lg ">
        <div><FaEarthAfrica /></div>
        <div className="flex flex-col gap-4">
          <h2>Total Users</h2>
          <h1 className="text-2xl font-bold">10,928</h1>
          <p className="text-green-500 text-xs">12% <span className="text-white">more than previus week</span></p>
        </div>
      </div>

    </div>

   

    <LineChartComponent /> 
 </>

   
  );
};

export default DashboardPage;
