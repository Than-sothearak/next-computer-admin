"use client";
import { useState } from "react";

export default function AddCategory() {
  const [isAddSpec, setIsAddSpec] = useState(false);
  return (
    <div className="p-4 bg-slate-800 mt-4 rounded-lg">
      <form className="space-y-2 text-sm">
        <div className="grid gap-4">
          <div>
            <label className="block font-medium">Title</label>
            <div className="flex gap-4">
              <input
                type="text"
                className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
              />
              <button
                type="submit"
                className=" bg-teal-600 w-full text-white py-2 rounded"
              >
                Add Specification
              </button>
            </div>
          </div>
          <div>
            <div className="space-y-2 text-sm">
              <div className="flex gap-4">
                <div className="w-full">
                  <label className="w-full block font-medium">Part</label>
                  <div className="">
                    <input
                      type="text"
                      className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label className="block font-medium">Value</label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className=" bg-teal-600 w-full  text-white py-2 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}
