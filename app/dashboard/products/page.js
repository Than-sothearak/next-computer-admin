import SearchCompoenent from "@/components/SearchComponent";
import Link from "next/link";
import React from "react";

const ProductPage = () => {
  return (
    <div className="p-4 bg-slate-800 mt-4 rounded-lg">
      <div className="flex justify-between">
      <div> <SearchCompoenent placeHolder="Search for product..." /></div>
      <Link href="/dashboard/products/add" className="bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-900 text-sm">Add new</Link>
      </div>
      <table className="my-4 w-full table-none md:table-fixed">
        <thead>
          <tr className="font-bold h-10">
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>

         
        </thead>
        <tbody>
          <tr className="">
            <td>Iphone 6plus</td>
            <td><p className="overflow-clip">this is desc</p></td>
            <td>999$</td>
            <td>13.1.2025</td>
            <td>123</td>
            <td className="flex gap-2 justify-items-center items-center">
            <button className="bg-teal-600 px-2 py-1 rounded-md hover:bg-teal-900 text-sm">View</button>
            <button className="bg-red-400 px-2 py-1 rounded-md hover:bg-red-900 text-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between">
        <button className="text-sm bg-slate-500 px-2 py-1 rounded-md hover:bg-slate-700">Previus</button>

        <button className="text-sm bg-slate-500 px-2 py-1 rounded-md hover:bg-slate-700">Next</button>
      </div>
    </div>
  );
};

export default ProductPage;
