"use client";
import { BiPlus, BiX } from "react-icons/bi";

export default function ProductPropertyForm({
  categoryProperties,
  addProperty,
  properties,
  removeProperty,
}) {
  return (
    <div className="bg-slate-800 w-full rounded-lg border p-4 border-slate-600">
      <h1 className="text-lg font-bold mb-2">Product Properties</h1>

      {categoryProperties?.map((items, index) => (
        <div key={index} className="flex gap-2 flex-col">
          <div className="mt-4">
            <label className="block font-medium" name="part">{items.part}</label>
            <select className="w-full p-2 rounded-md bg-slate-700 text-xs focus:ring-0  focus:outline-none">
              <option value="">Select</option>
              {items?.values?.map((value, index) => (
                <option key={index} value="">
                  {value}
                </option>
              ))}
            </select>
          </div>
          <input
            name="value"
            type="text"
            placeholder="Enter value..."
            className="m w-full p-2 rounded-md bg-slate-700 text-xs focus:ring-0 focus:outline-none"
          />
            <span className="text-xs italic">Noted: Seleting value or Enter value above</span>
        </div>
      
      ))}

      <div className="flex gap-4 flex-col mt-4">
        {properties?.map((item, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <div className="flex gap-4">
              <label>Part {index + 1}</label>
              <button className="text-red-500" type="button" onClick={() => removeProperty(index)}>
                Remove
              </button>
            </div>
            <input
              required
              type="text"
              placeholder="Enter part..."
              className="m w-full p-2 rounded-md bg-slate-700 text-xs focus:ring-0 focus:outline-none"
            />
            <input
              required
              type="text"
              placeholder="Enter value..."
              className="m w-full p-2 rounded-md bg-slate-700 text-xs focus:ring-0 focus:outline-none"
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addProperty}
        className="mt-3 flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded text-sm"
      >
        <BiPlus /> Add Property
      </button>
    </div>
  );
}
