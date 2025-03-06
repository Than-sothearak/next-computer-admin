"use client";
import { MdChat, MdNotifications } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import SearchCompoenent from "@/components/SearchComponent";
import Link from "next/link";
export const Navbar = () => {
  const pathName = usePathname();
  const pathArray = pathName.split("/").filter(Boolean);

  const currentPathname = pathName.split("/").pop();
  return (
    <div className="bg-slate-800 py-4 px-4 rounded-lg w-full max-sm:block flex justify-between items-center">
      <div className="max-sm:mb-2">
        <div className="capitalize text-sm text-slate-500 flex gap-1 items-center">
          {pathArray.map((p, index) => {
            const linkPath = `/${pathArray.slice(0, index + 1).join("/")}`;
            return (
              <Link href={linkPath} key={index} className={`${p === currentPathname ? 'text-white font-bold text-md': 'hover:text-white'}`}>
                {p} <span>{index !== pathArray.length - 1 ? ">" : ""}</span>
              </Link>
            );
          })}
         
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <SearchCompoenent placeHolder="Search..." />
        <div className="cursor-pointer">
          <MdChat size={20} />
        </div>
        <div className="cursor-pointer">
          <MdNotifications size={20} />
        </div>
        <div className="cursor-pointer">
          <FaEarthAmericas size={18} />
        </div>
      </div>
    </div>
  );
};
