import SearchCompoenent from "@/components/SearchComponent";
import Link from "next/link";

export default function CategoryPage () {
    return <div className="p-4 bg-slate-800 mt-4 rounded-lg">
    <div className="flex justify-between">
    <div> <SearchCompoenent placeHolder="Search for category..." /></div>
    <Link href="/dashboard/categories/add" className="bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-900 text-sm">Add new</Link>
    </div>
    <table className="my-4 w-full table-none md:table-fixed">
      <thead>
        <tr className="font-bold h-10">
          <td>Category</td>
          <td>Description</td>
          <td>Stock</td>
    
        </tr>

       
      </thead>
      <tbody>
        <tr className="">
          <td>Desktop</td>
          <td><p className="overflow-clip">this is desc</p></td>
          <td className="flex gap-2 justify-items-center items-center">
          <Link href={'/dashboard/categories/product-id-1'} className="bg-teal-600 px-2 py-1 rounded-md hover:bg-teal-900 text-sm">View</Link>
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
}