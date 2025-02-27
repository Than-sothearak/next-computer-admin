"use client"
import SearchCompoenent from "@/components/SearchComponent";
import Link from "next/link";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const ProductPage = () => {
  const [isClicked, setisClicked] = useState(true)
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
          <tr className="border-b border-slate-600">
            <td className="flex gap-2 items-center my-3"><img src="https://i.ebayimg.com/images/g/5vsAAeSwWMpnrr5e/s-l300.jpg" className="w-14 h-14 rounded-md"/><p>Iphone 6plus</p></td>
            <td><p className="overflow-clip">this is desc</p></td>
            <td>999$</td>
            <td>13.1.2025</td>
            <td>123</td>
            <td className="relative">
            <button onClick={()=> setisClicked(prev => !prev)}className="relative"><BsThreeDots size={24}/></button>
            <div aria-disabled className={`${isClicked ? 'opacity-0 pointer-events-none' : 'block'} absolute bg-slate-500 p-4 flex gap-2 justify-items-center items-center rounded-md transition-opacity duration-300 ease-out opacity-100 delay-5000 max-lg:right-0`}>
            <Link href={'/dashboard/products/product-id-1'} className="bg-teal-600 px-2 py-1 rounded-md hover:bg-teal-900 text-sm">View</Link>
            <button className="bg-red-400 px-2 py-1 rounded-md hover:bg-red-900 text-sm">Delete</button>
            </div>
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
