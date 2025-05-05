import { auth } from "@/auth";
import { Navbar } from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import { SessionProvider } from "next-auth/react";

export default async function DashboardLayout({ children }) {
  const session = await auth();
  return (
    <div className="flex">
      <div className="bg-primary h-screen">
        <Sidebar session={session}/>
      </div>
      <div className="w-full overflow-x-auto lg:mx-4">
      <Navbar session={session}/>
        <div className="max-lg:mx-4 overflow-x-auto"> <SessionProvider>
      {children}
    </SessionProvider></div>
      </div>
    </div>
  );
}
