import { Navbar } from "@/components/dashboard/navbar/navbar";
import { Sidebar } from "@/components/dashboard/sidebar/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full mt-4 mx-4">
        <Navbar />
        <div>{children}dsd</div>
      </div>
    </div>
  );
}
