import { auth } from "@/auth";
import { Navbar } from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import { User } from "@/models/User";
import { mongoDb } from "@/utils/connectDB";

export default async function DashboardLayout({ children }) {
  await mongoDb()
  const session = await auth();
  const user = await User.findOne({ _id: session?.user?._id });

  return (
    <div className="flex">
      <div className="bg-primary h-screen">
        <Sidebar session={session} />
      </div>
      <div className="w-full overflow-x-auto lg:mx-4">
        <Navbar
          session={session}
          user={JSON.parse(JSON.stringify(user))}
        />
        <div className="max-lg:mx-4 overflow-x-auto">{children}</div>
      </div>
    </div>
  );
}
