"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { formatDate } from "@/utils/formatDate";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const OrderHistory = ({
  orders,
  currentPage,
  itemPerPage,
  sortKey,
  pathname,
  query,
}) => {

  const [direction, setDirection] = useState("ascending");

  const searchParams = useSearchParams()

  const getSortIcon = (key) => {
    if (key === sortKey) {
      return direction === "ascending" ? (
        <IoIosArrowUp />
      ) : (
        <IoIosArrowDown />
      );
    } else {
      return <IoIosArrowDown />;
    }
  };

  const handleSort = (key) => {
    setDirection((prevDirection) =>
      prevDirection === "ascending" ? "descending" : "ascending"
    );
    const params = new URLSearchParams(searchParams.toString());
    params.set("sortKey", key);
    params.set("sortDirection", direction);
   

  };

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
                <Link
                  href={`/dashboard/${pathname}?page=${currentPage}${query ? `&query=${query}` : ""}&sortKey=price&sortDirection=${direction}`}
                  onClick={() => handleSort("price")}
                  className="flex text-center items-center gap-2 px-2 py-1 border rounded-md"
                >
                  <p>Price</p>
                  {getSortIcon("price")}
                </Link>
              </th>
              <th className=" border-gray-300 px-4 py-2">
                <Link
                  href={`/dashboard/${pathname}?page=${currentPage}${query ? `&query=${query}` : ""}&sortKey=date&sortDirection=${direction}`}
                  onClick={() => handleSort("date")}
                  className="flex text-center items-center gap-2 px-2 py-1 border rounded-md"
                >
                  <p>Date</p>
                  {getSortIcon("date")}
                </Link>
              </th>
              <th className="border border-gray-300 px-4 py-2">
                <Link
                  href={`/dashboard/${pathname}?page=${currentPage}${query ? `&query=${query}` : ""}&sortKey=status&sortDirection=${direction}`}
                  onClick={() => handleSort("status")}
                  className="flex text-center items-center gap-2 px-2 py-1 border rounded-md"
                >
                  <p>Status</p>
                  {getSortIcon("status")}
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td className="border border-gray-300 px-4 py-2">
                  <p>{Number(currentPage - 1) * itemPerPage + index + 1}</p>
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
