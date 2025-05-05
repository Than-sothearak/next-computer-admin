import React from "react";
import { PiEmptyThin } from "react-icons/pi";
import ButtonViewAndDelete from "./ButtonViewAndDelete";

const TableCategory = ({ data, columns, pageName }) => {
  return (
    <div className="overflow-y-clip overflow-x-auto">
      {data.length !== 0 ? (
        <table className="my-4 w-full rounded-lg overflow-hidden text-sm">
          <thead>
            <tr className="font-bold h-10 bg-primary">
              {columns.map((col, index) => (
                <th key={index} className="px-4 text-left">
                  {col.header}
                </th>
              ))}
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((rowCat, index) => (
              <tr
                key={index}
                className="border-b border-slate-700 hover:bg-secondary transition-all"
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="py-6 px-4">
                   <div className="flex gap-2 justify-start items-center">
                   {column.accessor === "parentCategory" ? (
                       
                       <>
                        {data.find(
                          (category) => category._id === rowCat[column.accessor]
                        )?.category || "No"}
                       </>
                   
                    ) : (
                     
                       <>
                        {column.accessor
                          ? rowCat[column.accessor]
                          : rowCat[column.header]}
                     
                       </>
                    )}
                   </div>
                     
                   
                  </td>
                ))}
                <td className="relative z-50">
                  <ButtonViewAndDelete
                    link={`/dashboard/${pageName}/${rowCat._id}`}
                    id={rowCat._id}
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
          <p>No categories found</p>
        </div>
      )}
    </div>
  );
};

export default TableCategory;
