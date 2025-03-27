"use client";
import ChooseSingleImageFile from "@/components/ChooseSingleImage";
import { addUsers, updateUser } from "@/actions/users"; // Import update function
import { useActionState, useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function UserForm({ userId, userData, session }) {
  const [formData, setFormData] = useState({
    name: userData?.username || "",
    email: userData?.email || "",
    phone: userData?.phone || "",
    address: userData?.address || "",
    password: "",
    role: userData?.isAdmin ? "admin" : "user",
    imageUrl: userData?.imageUrl || "",
  });

  const updateUserWithId = updateUser.bind(null, userData?._id);

  const [state, action, isPending] = useActionState(
    userId ? updateUserWithId : addUsers, // Use update action if editing
    undefined,
    userId
  );


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  if(!session?.user?.isAdmin) {
    return (
      <form
      action={action}
      className="w-[978px] max-2xl:w-full mx-auto p-4 bg-slate-800 mt-4 rounded-lg"
    >
      <div className="flex w-full gap-6 mb-6 max-md:flex-wrap justify-center">
        <div>
          <ChooseSingleImageFile imageUrl={formData?.imageUrl || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
          <h2 className="text-sm font-bold mt-4 text-center">
            {formData.role === "admin" ? "Admin" : "User"}
          </h2>
        </div>
        <div className="h-full w-full max-md:grid-cols-1 text-sm">
          <div className="grid gap-4 max-md:grid-cols-1 text-sm">
            <div>
              <label className="block font-bold">Name</label>
              <input
                name="name"
                id="name"
                type="text"
                defaultValue={formData?.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-2 rounded-md bg-slate-700 border-none text-xs focus:ring-0 focus:outline-none"
              />
              {state?.errors?.name && (
                <p className="text-red-500 mt-2">{state.errors.name}</p>
              )}
    
              {state?.error && state.error.field === "name" && <p>{state.error.error}</p>}
            </div>
    
            <div>
              <label className="block font-bold">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                defaultValue={formData?.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full p-2 rounded-md bg-slate-700 border-none text-xs focus:ring-0 focus:outline-none"
              />
              {state?.errors?.email && (
                <p className="text-red-500 mt-2">{state.errors.email}</p>
              )}
    
              {state?.error && (
                <p className="text-red-500 mt-2">{state.error}</p>
              )}
            </div>
    
            <div>
              <label className="block font-bold">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                defaultValue={formData?.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-2 rounded-md bg-slate-700 border-none text-xs focus:ring-0 focus:outline-none"
              />
              {state?.errors?.phone && (
                <p className="text-red-500 mt-2">{state.errors.phone}</p>
              )}
            </div>
    
            <div>
              <label className="block font-bold">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                defaultValue={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="w-full p-2 rounded-md bg-slate-700 border-none text-xs focus:ring-0 focus:outline-none"
              />
              {state?.errors?.address && (
                <p className="text-red-500 mt-2">{state.errors.address}</p>
              )}
            </div>
    
            {/* Password: Only allow changes if entered */}
            <div>
              <label className="block font-bold">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                defaultValue={formData?.password}
                onChange={handleChange}
                placeholder="Leave empty to keep current password"
                className="w-full p-2 rounded-md bg-slate-700 border-none text-xs focus:ring-0 focus:outline-none"
              />
              {state?.errors?.password && (
                <p className="text-red-500 mt-2">{state.errors.password}</p>
              )}
            </div>
    
            <div>
              <label className="block font-bold">Role</label>
              <select
                name="role"
                id="role"
                defaultValue={formData?.role}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-slate-700 border-none text-xs focus:ring-0 focus:outline-none"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
    
          <button
            type="submit"
            disabled={isPending}
            className={`p-2 bg-blue-600 w-full mt-6 hover:bg-blue-500 hover:text-slate-200 rounded-md ${
              isPending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isPending
              ? userId
                ? "Updating..."
                : "Adding..."
              : userId
              ? "Update"
              : "Add"}
          </button>
    
          {state?.success && (
            <p className="text-green-400 text-sm mt-4 text-center">
              User {userId ? "updated" : "added"} successfully!
            </p>
          )}
          {state?.errors && (
            <p className="text-red-400 text-sm mt-4 text-center"></p>
          )}
        </div>
      </div>
    </form>
    
    );
  }
}
