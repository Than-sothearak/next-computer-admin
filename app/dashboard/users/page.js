import SearchCompoenent from '@/components/SearchComponent'
import Link from 'next/link'
import React from 'react'

const UserPage = () => {
  return (
     <div className="p-4 bg-slate-800 mt-4 rounded-lg">
          <div className="flex justify-between">
          <div> <SearchCompoenent placeHolder="Search for user..." /></div>
          <Link href="/dashboard/users/add" className="bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-900 text-sm">Add new</Link>
          </div>
          <table className="my-4 w-full table-none md:table-fixed">
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
              <tr className="">
                <td className='flex items-center gap-3'>
                  <img className='max-lg:hidden w-10 h-10 rounded-full' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'/>
                  <p>User className</p>
                </td>
                <td><p className='overflow-x-hidden'>user@gmailuser@gmailuser@gmailuser@gmail</p></td>
                <td>13.1.2025</td>
                <td>admin</td>
                <td className="table-cell">
            
                <Link href={"/dashboard/users/testuser"} className="bg-teal-600 px-2 py-1 mr-2 rounded-md hover:bg-teal-900 text-sm">View</Link>
                <button className="bg-red-400 px-2 py-1 rounded-md hover:bg-red-900 text-sm">Delete</button>
               
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between">
            <button className="text-sm bg-slate-500 px-2 py-1 rounded-md hover:bg-slate-700">Previus</button>
    
            <button className="text-sm bg-slate-500 px-2 py-1 rounded-md hover:bg-slate-700">Next</button>
          </div>
        </div>
  )
}

export default UserPage