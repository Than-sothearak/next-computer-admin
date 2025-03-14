"use client"
import { Navbar } from "@/components/dashboard/navbar/navbar";
import { Sidebar } from "@/components/dashboard/sidebar/sidebar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <div className="bg-slate-800">
        <Sidebar />
      </div>
      <div className="w-full overflow-x-auto">
      <Navbar setIsOpen={setIsOpen}/>
        <div className="mx-4 overflow-x-auto">{children}</div>
      </div>
    </div>
  );
}
