"use client"
import { Navbar } from "@/components/dashboard/navbar/navbar";
import { Sidebar } from "@/components/dashboard/sidebar/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="bg-primary">
        <Sidebar />
      </div>
      <div className="w-full  overflow-x-auto">
      <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
}
