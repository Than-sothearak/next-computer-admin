"use client"
import { MdChat, MdNotifications } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import SearchCompoenent from "@/components/SearchComponent";
export const Navbar = () => {
  const pathName = usePathname()
  const getPathname = pathName.split("/").pop()
  return (
    <div className="bg-slate-800 py-4 px-4 rounded-lg w-full max-sm:block flex justify-between items-center">
      
      <div>
        <div className="capitalize text-sm text-slate-500 flex gap-1 items-center">
          {pathName.replace(/\//g, '>').slice(1, pathName.lastIndexOf('/')+ 1).replace('>', '  > ')}
          <h1 className="text-white font-bold">{getPathname}</h1>
          </div>
      </div>
      <div className="flex gap-4 items-center">
      <SearchCompoenent placeHolder="Search..."/>
        <div className="cursor-pointer"><MdChat size={20}/></div>
        <div className="cursor-pointer"><MdNotifications size={20}/></div>
        <div className="cursor-pointer"><FaEarthAmericas size={18}/></div>
      </div>
    </div>
  );
};
