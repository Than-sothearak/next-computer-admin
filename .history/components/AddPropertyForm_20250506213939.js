"use client";
import React, { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";

const AddPropertyForm = ({ formData, setFormData }) => {
  const [isAddSpec, setIsAddSpec] = useState(false);

  // Adds a new empty value for a part
  const addValue = (partIndex) => {
    const updatedProperties = [...formData.properties];
    const values = updatedProperties[partIndex].values;

    // Check if the last value is not empty before adding a new one
    if (values[values.length - 1] !== "") {
      updatedProperties[partIndex].values.push(""); // Add new value slot
      setFormData((prev) => ({ ...prev, properties: updatedProperties }));
    }
  };

  // Removes a value from the values array of a part
  const removeValue = (partIndex, valueIndex) => {
    const updatedProperties = [...formData.properties];
    updatedProperties[partIndex].values.splice(valueIndex, 1); // Remove the value at the specified index
    setFormData((prev) => ({ ...prev, properties: updatedProperties }));
  };

  // Adds a new part section
  const addPart = () => {
    setIsAddSpec(!isAddSpec);
    setFormData((prev) => ({
      ...prev,
      properties: [...prev.properties, { part: "", values: [""] }],
    }));
  };

  // Removes a part section
  const handleRemovePart = (index) => {
    setFormData((prev) => ({
      ...prev,
      properties: prev.properties.filter((_, i) => i !== index),
    }));
  };

  // Handles updating part names
  const handlePartChange = (index, value) => {
    const updatedProperties = [...formData.properties];
    updatedProperties[index].part = value;
    setFormData((prev) => ({ ...prev, properties: updatedProperties }));
  };

  // Handles updating values inside parts
  const handleValueChange = (partIndex, valueIndex, value) => {
    const updatedProperties = [...formData.properties];
    updatedProperties[partIndex].values[valueIndex] = value;
    setFormData((prev) => ({ ...prev, properties: updatedProperties }));
  };

  return (
    <div className="flex flex-col gap-2 mb-4">
      <button
        type="button"
        className="bg-blue-600 w-36 p-2 text-secondarytext rounded-md flex items-center gap-2 text-base hover:underline hover:bg-blue-500"
        onClick={addPart}
        title="Click to add more property"
      >
        <BiPlusCircle /> Add property
      </button>
      <p className="text-xs italic">
        Note: Input values using ; to separate property values or click on the +
        button.
      </p>

      <div className="grid grid-cols-3 max-2xl:grid-cols-2 gap-4 max-lg:grid-cols-1 ">
        {formData.properties.length > 0 &&
          formData.properties.map((part, partIndex) => (
            <div
              key={partIndex}
              className="border border-secondary p-2 rounded-md max-lg:w-full text-sm relative"
            >
              <div className="w-full flex gap-2 max-md:flex-wrap ">
                <div className="w-full ">
                  <label className="w-full block font-medium">Part</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="part"
                      required
                      value={part.part}
                      onChange={(e) =>
                        handlePartChange(partIndex, e.target.value)
                      }
                      className="w-full p-2 rounded-md bg-secondary text-xs focus:ring-0 focus:outline-none"
                      placeholder="Enter value (e.g., CPU)"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-2">
                <div className="flex gap-2 justify-start items-center">
                
                  <label className="w-full block font-medium">
                    Value {part.values.length}
                  </label>
                </div>
                <div className="mt-2 flex gap-2 max-h-[240px] overflow-y-auto">
                  <div className="w-full flex flex-wrap gap-2 justify-between">
                    {part.values.map((value, valueIndex) => (
                      <div
                        key={valueIndex}
                        className={`flex w-full gap-2 ${
                          valueIndex === part.values.length - 1
                            ? "order-first"
                            : ""
                        }`}
                      >
                        <input
                          required
                          type="text"
                          name="value"
                          value={value}
                          onChange={(e) =>
                            handleValueChange(
                              partIndex,
                              valueIndex,
                              e.target.value
                            )
                          }
                          className={`${
                            value
                              ? "bg-primary border border-secondary"
                              : "bg-secondary"
                          } w-full px-2 rounded-sm text-xs focus:ring-0 focus:outline-none`}
                          placeholder="Enter value (e.g., 16GB;32GB:128GB;)"
                        />
                        <button
                          type="button"
                          className="bg-slate-500 text-secondarytext  px-3 py-1 rounded h-8 w-8 hover:bg-red-500"
                          onClick={() => removeValue(partIndex, valueIndex)}
                        >
                          x
                        </button>
                      </div>
                    ))}
                  </div>
             
                </div>

                <button
                    type="button"
                    className={`${part.values[part.values.length - 1] === "" ? 'cursor-not-allowed text-slate-400': 'hover:bg-blue-700 text-blue-600'} px-3 py-1 rounded h-8 w-full mt-4 `}
                    onClick={() => addValue(partIndex)}
                    disabled={part.values[part.values.length - 1] === ""}
                  >
                   Add
                  </button>
              </div>
              <button
                type="button"
                className="text-red-500 hover:text-primarytext hover:underline text-sm absolute right-0 top-0 p-2 rounded-full"
                onClick={() => handleRemovePart(partIndex)}
              >
                X Remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddPropertyForm;
