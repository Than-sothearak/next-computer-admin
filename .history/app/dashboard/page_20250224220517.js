import { latestTransactions } from "@/data/lastTransactions";
import { FaEarthAfrica } from "react-icons/fa6";
const DashboardPage = () => {
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

    <div className="mt-4 rounded-lg flex max-sm:flex-wrap gap-4 bg-slate-800 p-4">
      <h1>Last Transactions</h1>
      <div>
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {latestTransactions.map((transaction, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50 transition-all"
            >
              <td className="p-3">{transaction.name}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    statusColors[transaction.status] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
              <td className="p-3">{transaction.date}</td>
              <td className="p-3 font-semibold">${transaction.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
 </>

   
  );
};

export default DashboardPage;
