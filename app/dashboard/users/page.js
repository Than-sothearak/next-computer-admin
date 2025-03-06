import SearchComponent from "@/components/SearchComponent";
import Link from "next/link";
import React from "react";
import { getUsers } from "@/actions/users";
import TableComponent from "@/components/TableComponent";

const UserPage = async ({ searchParams }) => {
  const { query } = await searchParams;
  const fecthUsers = await getUsers(query);
  
  const userColumns = [
   
    { header: "Username", accessor: "username" },
    { header: "Email", accessor: "email" },
    { header: "Created At", accessor: "createdAt" },
    { header: "Role", accessor: "isAdmin" },
  ];

  const users = JSON.parse(JSON.stringify(fecthUsers));

  return (
    <div className="p-4 justify-center bg-slate-800 mt-4 rounded-lg">
      {/* Search and Add New User */}
      <div className="flex justify-between items-center gap-4">
        <SearchComponent
          placeHolder="Search user by username..."
          linkPage="/dashboard/users"
        />
        <Link
          href="/dashboard/users/add"
          className="bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-900 text-sm text-center"
        >
          Add new
        </Link>
      </div>

      {/* Users Table */}
  <TableComponent data={users} pageName="users" columns={userColumns}/>

      {/* Pagination Buttons */}
      <div className="flex justify-between">
        <button className="text-sm bg-slate-500 px-2 py-1 rounded-md hover:bg-slate-700">
          Previous
        </button>
        <button className="text-sm bg-slate-500 px-2 py-1 rounded-md hover:bg-slate-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default UserPage;
