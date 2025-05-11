"use client";
import React, { useState } from "react";
import { SidebarList } from "./SidebarList";
import Logout from "./Logout";
import { IoClose } from "react-icons/io5";
import {
  analyticNavigation,
  pageNavigation,
  userNavigation,
} from "@/lib/navLinks";
import ChooseSingleImageFile from "./ChooseSingleImage";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const SideBarMobile = ({ handleClick, isOpen, session, user }) => {
  const [isClicked, setIsClicked] = useState(false);
  
 
 const currentUser = user?.find((user) => user?._id === session?.user?._id);
  return (
    <div
      className={`bg-primary max-lg:h-full p-4 w-80 max-lg:fixed
         top-0 left-0 z-50 transform transition-transform  duration-700 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0  max-sm:w-full
      `}
    >
      <div className="cursor-pointer flex  justify-between items-center gap-4 px-2 text-primarytext">
        <button
          onClick={() => setIsClicked((prev) => !prev)}
          className="flex gap-2 justify-start items-center"
        >
          {session.user.imageUrl ? (
            <img
              className="w-11 h-11 bg-cover rounded-full"
              src={session?.user?.imageUrl}
            />
          ) : (
            <img
              className="w-11 h-11 bg-cover rounded-full"
              src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png"
            />
          )}
          <div className="">
            <h1 className="text-sm font-bold">{currentUser?.username}</h1>
            {session?.user?.isAdmin ? (
              <p className="text-xs">Admin</p>
            ) : (
              <p className="text-xs">User</p>
            )}
          </div>
        </button>
        <button
          onClick={handleClick}
          aria-label="Close Sidebar"
          title="Close Sidebar"
          className="text-primarytext lg:hidden"
        >
          <IoClose size={28} />
        </button>
      </div>
      <div
        className={` ${
          !isClicked ? "max-h-0 opacity-0" : "opacity-100"
        } absolute overflow-auto rounded-md mix-w-full transition-all duration-300 ease-in-out `}
      >
        <div className="bg-primary border w-[320px] p-4 mt-2 rounded-lg border-secondary shadow-xl/20">
          <button onClick={() => setIsClicked(false)} className="absolute right-2 top-4 hover:bg-secondary rounded-full p-1"><IoMdClose size={24} /></button>
          <div className="flex flex-col items-center gap-4"> 
            <div className="flex justify-center">
              <p>{session?.user?.email}</p>
            </div>
            <ChooseSingleImageFile
              imageUrl={
                session?.user?.imageUrl ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
            />

            <div className="flex justify-center">
              <p className="text-2xl">Hi, {session?.user?.username}!</p>
            </div>

            <div className="flex justify-center">
            <Link
          href={`/dashboard/users/${session?.user?._id}`}
          className="border border-secondary px-4 py-2 rounded-md hover:bg-tertiary hover:text-secondarytext text-sm"
        >
          Edit your account information
        </Link>
            </div>
          </div>
        </div>
      </div>

      <SidebarList navList={pageNavigation} />
      <SidebarList navList={analyticNavigation} />
      <SidebarList navList={userNavigation} />

      <Logout />
    </div>
  );
};

export default SideBarMobile;
