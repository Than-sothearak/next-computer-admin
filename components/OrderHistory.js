"use client";
import React, { useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { formatDate } from "@/utils/formatDate";

const OrderHistory = ({ orders, currentPage, itemPerPage }) => {
  const [sortKey, setSortKey] = React.useState(null); // to track the sorted column
  const [sortDirection, setSortDirection] = React.useState("ascending");
  const [sortedOrders, setSortedOrders] = React.useState(orders);
  
  const sortOrders = (key) => {
    let direction = sortDirection;
    // if the same key is clicked, toggle direction; else reset to ascending
    if (sortKey === key) {
      direction = sortDirection === "ascending" ? "descending" : "ascending";
    } else {
      direction = "ascending";
    }

    

    const sorted = [...sortedOrders].sort((a, b) => {
      if (key === "date") {
        return direction === "ascending"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else if (key === "price") {
        return direction === "ascending"
          ? a.totalAmount - b.totalAmount
          : b.totalAmount - a.totalAmount;
      } else if (key === "paymentStatus") {
        return direction === "ascending"
          ? a.paymentStatus.localeCompare(b.paymentStatus)
          : b.paymentStatus.localeCompare(a.paymentStatus);
      }
      return 0;
    });

    setSortedOrders(sorted);
    setSortKey(key);
    setSortDirection(direction);
  };

  const getSortIcon = (key) => {
    if (key === sortKey) {
      return sortDirection === "ascending" ? (
        <IoIosArrowUp />
      ) : (
        <IoIosArrowDown />
      );
    } else {
      return <IoIosArrowDown />; // default static icon for inactive columns
    }
  };
useEffect(() => {
      setSortedOrders(orders);
    }, [orders]);
  

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">No</th>
              <th className="border border-gray-300 px-4 py-2">Order ID</th>
              <th className="border border-gray-300 px-4 py-2">Customer ID</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className=" border-gray-300 px-4 py-2 border">
                <button
                  onClick={() => sortOrders("price")}
                  className="flex text-center items-center gap-2 px-2 py-1 border rounded-md"
                >
                  <p>Price</p>
                  {getSortIcon("price")}
                </button>
              </th>
              <th className=" border-gray-300 px-4 py-2">
                <button
                  onClick={() => sortOrders("date")}
                  className="flex text-center items-center gap-2 px-2 py-1 border rounded-md"
                >
                  <p>Date</p>
                  {getSortIcon("date")}
                </button>
              </th>
              <th className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => sortOrders("status")}
                  className="flex text-center items-center gap-2 px-2 py-1 border rounded-md"
                >
                  <p>Status</p>
                  {getSortIcon("status")}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedOrders.map((order, index) => (
              <tr key={order._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {(Number(currentPage - 1)) * itemPerPage + index+1}
                </td>
          
                <td className="border border-gray-300 px-4 py-2">
                  {order._id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.customerID}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.customerPhone}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${order.totalAmount}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {formatDate(order.date)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.paymentStatus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderHistory;
