import React from "react";
import { PiEmptyThin } from "react-icons/pi";
import ButtonViewAndDelete from "./ButtonViewAndDelete";

const TableCategory = ({ data, columns, pageName }) => {

  return (
    <>
      {data.length !== 0 ? (
        <table className="my-4 w-full table-auto text-sm">
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
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-slate-700 hover:bg-slate-700"
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="py-4 px-4">
                  <div className="flex gap-2 justify-start items-center">
                   <p> {column.accessor ? column.accessor === "isAdmin" ? row[column.accessor] ? "Admin": "user" : row[column.accessor] 
                    : row[column.header]}</p>
                  </div>
                  </td>
                ))}
                <td className="relative">
                  <ButtonViewAndDelete
                    link={`/dashboard/${pageName}/${row._id}`}
                    userId={row._id}
                    users={data}
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
    </>
  );
};

export default TableCategory;
