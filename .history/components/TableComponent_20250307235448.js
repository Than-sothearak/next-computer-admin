import React from "react";
import { PiEmptyThin } from "react-icons/pi";
import ButtonViewAndDelete from "./ButtonViewAndDelete";

const TableComponent = ({ data, columns, pageName }) => {

  return (
    <div className="overflow-y-clip overflow-x-scroll">
      {data.length !== 0 ? (
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
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-slate-700 hover:bg-slate-700"
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="py-4 px-4">
                  <div className="flex gap-2 justify-start items-center">
                  {colIndex === 0 && (
                         <img
                         src={`${row?.imageUrl  ? row.imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8K9TdeuJNHtTMH-JaUph5CgQ7P1nYgx8z9w&s'}`}
                         alt={`image-${index}`}
                         className="w-8 h-8 rounded-full"
                       />
                    )}
                   <> {column.accessor ? column.accessor === "isAdmin" ? row[column.accessor] ? "Admin": "user" : row[column.accessor] 
                    : row[column.header]}</>
                  </div>
                  </td>
                ))}
                <td className="relative">
                  <ButtonViewAndDelete
                    link={`/dashboard/${pageName}/${row._id}`}
                    id={row._id}
                    data={data}
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
