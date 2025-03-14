"use client"
import { Navbar } from "@/components/dashboard/navbar/navbar";
import { Sidebar } from "@/components/dashboard/sidebar/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="bg-slate-800">
        <Sidebar />
      </div>
      <div className="w-full ">
      <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
}
