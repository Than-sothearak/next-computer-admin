import ButtonViewAndDelete from '@/components/ButtonViewAndDelete'
import SearchComponent from '@/components/SearchComponent'
import Link from 'next/link'
import { User } from '@/models/User'
import { mongoDb } from '@/utils/connectDB'
import React from 'react'

const UserPage = async () => {
  await mongoDb();

  // Fetch users from MongoDB
  const users =  JSON.parse(JSON.stringify(await User.find().sort({ createdAt: -1 })));
 
  return (
    <div className="p-4 bg-slate-800 mt-4 rounded-lg">
      {/* Search and Add New User */}
      <div className="flex justify-between">
        <SearchComponent placeHolder="Search for user..." />
        <Link href="/dashboard/users/add" className="bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-900 text-sm">
          Add new
        </Link>
      </div>

      {/* Users Table */}
      <table className="my-4 w-full table-auto text-sm">
        <thead>
          <tr className="font-bold h-10">
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b border-gray-700">
              <td className="flex items-center gap-3 my-2">
                <img 
                  className="max-lg:hidden w-10 h-10 rounded-full" 
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="User Avatar"
                />
                <p>{user.username}</p>
              </td>
              <td className="overflow-hidden">{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td className="relative">
                <ButtonViewAndDelete link={`/dashboard/users/${user._id}`} userId={user._id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Buttons */}
      <div className="flex justify-between">
        <button className="text-sm bg-slate-500 px-2 py-1 rounded-md hover:bg-slate-700">Previous</button>
        <button className="text-sm bg-slate-500 px-2 py-1 rounded-md hover:bg-slate-700">Next</button>
      </div>
    </div>
  )
}

export default UserPage;
