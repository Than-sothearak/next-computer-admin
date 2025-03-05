"use client";
import { deleteUser } from "@/actions/users";
import Link from "next/link";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const ButtonViewAndDelete = ({ link, userId }) => {
  const [isClicked, setIsClicked] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleShowConfirm = () => {
    setIsClicked(true);
    setShowConfirmation(false); // Hide the confirmation modal after deletion
  };

  return (
    <>
      <button
        onClick={() => setIsClicked((prev) => !prev)}
        className="relative"
      >
        <BsThreeDots size={24} />
      </button>

      <div
        className={`${
          isClicked ? "opacity-0 pointer-events-none" : "block"
        } absolute bg-slate-500 p-4 flex gap-2 justify-items-center items-center rounded-md transition-opacity duration-500 ease-out max-lg:right-0 z-10`}
      >
        <Link
          href={link}
          className="bg-teal-600 px-2 py-1 rounded-md hover:bg-teal-900 text-sm"
        >
          View
        </Link>
        <button
          onClick={() => setShowConfirmation(true)}
          className="bg-red-400 px-2 py-1 rounded-md hover:bg-red-900 text-sm"
        >
          Delete
        </button>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-slate-900 p-6 rounded-md shadow-lg">
            <p className="text-center text-sm mb-4">
              Are you sure you want to delete this user?
            </p>
            <div className="flex justify-between gap-4">
              <button
                onClick={handleShowConfirm}
                className="bg-gray-400 px-4 py-2 rounded-md hover:bg-gray-600 w-full text-white"
              >
                No
              </button>
              <form
                action={deleteUser.bind(null, userId)}
                className="bg-red-500 px-4 py-2 rounded-md w-full"
              >
                <button
                  className=" text-white w-full"
                  type="submit"
                >
                  Yes
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonViewAndDelete;
