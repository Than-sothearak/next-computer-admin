export default function lastTransactionComponent () {
    return (
        <div className="mt-4 rounded-lg bg-primary p-4">
        <h1 className="text-2xl text-slate-300">Last Transactions</h1>
        <div>
        <table className="w-full rounded-lg overflow-hidden">
          <thead className="text-sm">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Amount</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {latestTransactions.map((transaction, index) => (
              <tr
                key={index}
                className=" transition-all"
              >
                <td className="p-2 flex gap-2 items-center"><img className="object-cover w-9 h-9 rounded-full " src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2574"/>{transaction.name}</td>
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
    )
        
   
}