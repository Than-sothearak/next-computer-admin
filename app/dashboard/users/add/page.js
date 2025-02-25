"use client";
import ChooseSingleImageFile from "@/components/ChooseSingleImage";
import { useState } from "react";

export default function AddUserPage() {
  const roles = ["Admin", "User", "Moderator"];

  // Form data state
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    Description: "",
    profilePicture: null,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="p-4 bg-slate-800 mt-4 rounded-lg">
    
      <div>
        <div className="flex w-full gap-6 mb-6 max-md:flex-wrap justify-center">
          <div className="">
            
          <ChooseSingleImageFile />
        
            <h2 className="text-sm font-bold mt-4 text-center">Username</h2>
            <p className="text-sm text-center">Admin</p>
          </div>
          <form className="h-full grid grid-cols-2 w-full max-md:grid-cols-1 text-sm gap-4">
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Phone</label>
              <input
                type="phone"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Description</label>
              <textarea
                className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                rows="4"
              ></textarea>
            </div>
            {/* Role */}
            <div>
              <label className="block font-medium">Role</label>
              <select
                name="role"
                value={userData.role}
                onChange={handleInputChange}
                className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                required
              >
                <option value="">Select a role</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Add User
        </button>
      </div>
    </div>
  );
}
