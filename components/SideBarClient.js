"use client";
import {
  analyticNavigation,
  pageNavigation,
  userNavigation,
} from "@/lib/navLinks";
import { IoMdMenu } from "react-icons/io";
import { SidebarListMobile } from "@/components/SidebarListMobile";
import { useState } from "react";
import SideBarMobile from "./SideBarMobile";

const SideBarClient = ({ session, user}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
      {/*small side */}
      <div className="lg:hidden ml-1 mt-4 z-50 max-sm:hidden">
        <div className="mt-2 flex justify-center items-center ">
          <span className="text-primarytext text-lg font-semibold"></span>
          <button
            onClick={handleClick}
            aria-label="Open Sidebar"
            title="Open Sidebar"
          >
            <IoMdMenu size={28} />
          </button>
        </div>
        <SidebarListMobile navList={pageNavigation} />
        <SidebarListMobile navList={analyticNavigation} />
        <SidebarListMobile navList={userNavigation} />
      </div>

      <SideBarMobile
        user={user}
        handleClick={handleClick}
        session={session}
        isOpen={isOpen}
      />

      {/* Overlay (closes sidebar when clicked) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SideBarClient;
