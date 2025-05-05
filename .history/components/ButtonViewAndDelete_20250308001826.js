"use client";
import { deleteById } from "@/actions/deleteFromDb";
import Link from "next/link";
import React, { useState, useOptimistic, } from "react";
import { useFormStatus } from "react-dom";
import { BsThreeDots } from "react-icons/bs";

const ButtonViewAndDelete = ({ link, id, data }) => {
  const [isClicked, setIsClicked] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const status = useFormStatus()
  
  const handleShowConfirm = () => {
    setIsClicked(true);
    setShowConfirmation(false); // Hide the confirmation modal after deletion
  };

  const [optimisticData, setOptimisticData] = useOptimistic(data, (currentData, id) => {
    return currentData.filter((data) => data._id !== id)
  })
  
  const deleteUserById = async (id) => {
    setOptimisticData(id)
    setIsClicked(true);
    setShowConfirmation(false);
    await deleteById(id)
  }


  return (
    <>
      <button
        onClick={() => setIsClicked((prev) => !prev)}
        className="relative hover:text-blue-500"
      >
        <BsThreeDots size={24} />
      </button>

      <div
        className={`${
          isClicked ? "opacity-0 pointer-events-none" : "block"
        } absolute bg-slate-500 p-4 flex gap-2 justify-items-center items-center rounded-md transition-opacity duration-200 ease-out z-10 right-20 max-md:right-0`}
      >
        <Link
          href={link}
          className="bg-teal-600 px-2 py-1 rounded-md hover:bg-teal-900 text-sm"
        >
          Edit
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
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-between gap-4">
              <button
                onClick={handleShowConfirm}
                className="bg-gray-400 px-4 py-2 rounded-md hover:bg-gray-600 w-full text-primarytext"
              >
                No
              </button>
              <form
                action={deleteUserById.bind(null, id)}
                className="bg-red-500 px-4 py-2 rounded-md w-full hover:bg-red-700"
              >
                <button
                
                  className=" text-primarytext w-full"
                
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