"use client";
import { addCategory } from "@/actions/categories";
import { useActionState, useState } from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

export default function AddCategory() {
  const [isAddSpec, setIsAddSpec] = useState(false);
  const [category, setCategory] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [parts, setParts] = useState([]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleParentCategoryChange = (e) => {
    setParentCategory(e.target.value);
  };

  const handlePartChange = (index, value) => {
    const updatedParts = [...parts];
    updatedParts[index].part = value;
    setParts(updatedParts);
  };

  const handleValueChange = (index, value) => {
    const updatedParts = [...parts];
    updatedParts[index].newValue = value;
    setParts(updatedParts);
  };

  const handleAddValue = (index) => {
    const updatedParts = [...parts];
    const newValue = updatedParts[index].newValue;
    if (newValue) {
      updatedParts[index].values.push(newValue);
      updatedParts[index].newValue = ""; // Clear the input after adding
      setParts(updatedParts);
    }
  };

  const addPart = () => {
    setIsAddSpec(!isAddSpec);
    setParts([...parts, { part: "", values: []}]);
  };

  const handleRemovePart = (index) => {
    setParts(parts.filter((_, i) => i !== index));
  };

  const [state, action, isPending] = useActionState(addCategory, undefined);

  const handleSubmit = async () => {
 
    const formData = {
      category,
      parentCategory,
      parts,
    };
     action(formData);
  };

  return (
    <div className="p-4 bg-slate-800 mt-4 rounded-lg">
      <form action={handleSubmit} className="space-y-2 text-sm">
        <div className="grid gap-4">
          <div>
            <div className="flex gap-4">
              <div className="w-full flex flex-col gap-2">
                <label className="block font-medium">Category</label>
                <input
                  placeholder="Enter category (e.g., Desktop)"
                  type="text"
                  name="category"
                  value={category}
                  onChange={handleCategoryChange}
                  className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="block font-medium">Parent Category</label>
                <select
                  onChange={handleParentCategoryChange}
                  className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
                >
                  <option value="">Select a parent category</option>
                  <option value="Iwatch">Iwatch</option>
                  <option value="Computer">Computer</option>
                  <option value="Smartphone">Smartphone</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="flex items-center gap-2 text-base underline"
              onClick={addPart}
            >
              {isAddSpec ? <BiMinusCircle /> : <BiPlusCircle />} Add Another Part
            </button>
            {parts.length > 0 &&
              parts.map((part, index) => (
                <div
                  key={index}
                  className="bg-slate-600 justify-between p-4 rounded-md w-1/2 max-lg:w-full my-4 space-y-4 text-sm"
                >
                  <div className="w-full flex gap-4 max-md:flex-wrap">
                    <div className="w-full">
                      <label className="w-full block font-medium">Part</label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="part"
                          value={part.part}
                          onChange={(e) => handlePartChange(index, e.target.value)}
                          className="w-full p-2 rounded-md bg-slate-700 text-xs focus:ring-0 focus:outline-none"
                          placeholder="Enter part (e.g., RAM)"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label className="w-full block font-medium">Value</label>
                      <div className="mt-2 flex gap-2">
                        <input
                          type="text"
                          name="newValue"
                          value={part.newValue}
                          onChange={(e) => handleValueChange(index, e.target.value)}
                          className="w-full p-2 rounded-md bg-slate-700 text-xs focus:ring-0 focus:outline-none"
                          placeholder="Enter value (e.g., 16GB, 32GB)"
                        />
                        <button
                          type="button"
                          className="bg-green-500 text-white px-3 py-1 rounded"
                          onClick={() => handleAddValue(index)}
                        >
                          +
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {part.values.map((val, i) => (
                          <span key={i} className="bg-gray-500 px-2 py-1 rounded">
                            {val}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-red-500 underline text-sm"
                    onClick={() => handleRemovePart(index)}
                  >
                    Remove Part
                  </button>
                </div>
              ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}