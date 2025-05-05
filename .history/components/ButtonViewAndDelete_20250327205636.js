"use client";
import { deleteById } from "@/actions/deleteFromDb";
import Link from "next/link";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const ButtonViewAndDelete = ({ link, id, setOptimisticData,pending, session }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleShowConfirm = () => {
    setIsClicked(false);
    setShowConfirmation(false);
  };


  const deleteUserById = async (id) => {
    setOptimisticData(id)
    setShowConfirmation(false);
    await deleteById(id);
  };

  return (
    <form action={deleteUserById.bind(null, id)} 
      className="relative"
      onMouseLeave={() => setIsClicked(false)} // Hide when mouse leaves entire area
    >
      <button
      disabled={!session?.user?.isAdmin}
      type="button"
        onClick={() => setIsClicked((prev) => !prev)}
        className="relative hover:text-blue-500 opacity-50 cursor-not-allowed"
        // Show on hover over button
      >
        <BsThreeDots size={24} />
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute bg-slate-500 p-2 flex gap-2 justify-items-center items-center rounded-md transition-opacity duration-200 ease-out z-10 right-8 top-4 max-md:right-0 ${
          isClicked ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onMouseEnter={() => setIsClicked(true)}
      >
        <Link
          href={link}
          className="bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-600 text-sm"
        >
          Edit
        </Link>
        <button
           type="button"
          onClick={() => setShowConfirmation(true)}
          className="bg-slate-600 px-2 py-1 rounded-md hover:bg-secondary text-sm"
        >
          Delete
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-slate-900 p-6 rounded-md shadow-lg">
            <p className="text-center text-sm mb-4">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-between gap-4">
              <button
                 type="button"
                onClick={handleShowConfirm}
                className="bg-gray-400  rounded-md hover:bg-gray-600 w-full text-primarytext"
              >
                No
              </button>
       
                <button disabled={pending} className="rounded-md  bg-red-500 px-4 py-2 text-primarytext w-full hover:bg-red-700">
                {pending ? "Deteting..." : "Yes"}
                </button>
            
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default ButtonViewAndDelete;
