import { Navbar } from "@/components/dashboard/navbar/navbar";
import { Sidebar } from "@/components/dashboard/sidebar/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex 2xl:gap-4">
      <div className="2xl:w-1/5 w-1/3 max-xl:hidden">
        <Sidebar />
      </div>
      <div className="w-full mt-4 mx-4">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
}
