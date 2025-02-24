import { analyticNavigation, pageNavigation } from "@/lib/navLinks";
import { SidebarList } from "@/components/SidebarList";
import { IoMdMenu } from "react-icons/io";
export const Sidebar = () => {
 
  return (
    <>
    <div className=" bg-slate-800 p-4 w-full min-h-screen max-lg:hidden">
      <div className="p-4 bg-red-900">Profile</div>
      <button><IoMdMenu size={28}/></button>
      <div>
        
      </div>

      
    </div>
    </>
  );
};
