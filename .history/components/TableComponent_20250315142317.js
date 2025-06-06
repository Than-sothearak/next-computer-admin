"use client"
import React, { useOptimistic } from "react";
import { PiEmptyThin } from "react-icons/pi";
import ButtonViewAndDelete from "./ButtonViewAndDelete";
import { useFormStatus } from "react-dom";

const TableComponent = ({ data, columns, pageName }) => {


  
    const { pending } = useFormStatus();
    
    const [optimisticData, setOptimisticData] = useOptimistic(
        data,
        (currentData, id) => {
          return currentData.filter((data) => data._id !== id);
        }
      );

  return (
    <div className="overflow-y-clip overflow-x-auto">
      <h1 className="mt-4">Total: {data.length}</h1>
      {optimisticData.length !== 0 ? (
        <table className="my-4 w-full text-sm">
          <thead>
            <tr className="font-bold h-10">
              {columns.map((col, index) => (
                <td key={index} className="px-4">
                  {col.header}
                </td>
              ))}

              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {optimisticData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-slate-700 hover:bg-secondary"
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="py-4 px-4">
                  <div className="flex gap-2 justify-start items-center">
                  {colIndex === 0 && (
                         <img
                         src={ Array.isArray(row.imageUrls) && row.imageUrls.length > 0
                          ? row.imageUrls[0] // Take the first image from the array
                          : row.imageUrl // If imageUrl is a string, use it
                            ? row.imageUrl
                            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8K9TdeuJNHtTMH-JaUph5CgQ7P1nYgx8z9w&s' }
                         className="w-8 h-8 rounded-sm object-cover"
                       />
                    )}
                     {column.accessor === "category" ? (
                       
                       <>
                         {row.category?.category || "No Category"}
                       </>
                   
                    ) : (
                     
                      <> {column.accessor ? column.accessor === "isAdmin" ? row[column.accessor] ? "Admin": "user" : row[column.accessor] 
                        : row[column.header]}</>
                    )}
                  
                  </div>
                  </td>
                ))}
                <td className="relative">
                  <ButtonViewAndDelete
                    link={`/dashboard/${pageName}/${row._id}`}
                    id={row._id}
                    padding={padding}
                    setOptimisticData={setOptimisticData}
                  />
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      ) : (
        <div className="text-slate-500 py-4 text-md flex gap-2 justify-start items-center">
          <PiEmptyThin size={24} />
          <p className="">No user founded</p>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
