"use client"
import { Navbar } from "@/components/dashboard/navbar/navbar";
import { Sidebar } from "@/components/dashboard/sidebar/sidebar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick () {
    setIsOpen(prev => !prev)
  }
  return (
    <div className="flex">
      <div className="bg-slate-800">
        <Sidebar isOpen={isOpen} handleClick={handleClick} />
      </div>
      <div className="w-full overflow-x-auto m-4">
      <Navbar setIsOpen={setIsOpen}  handleClick={handleClick} />
        <div className="overflow-x-auto">{children}</div>
      </div>
    </div>
  );
}
