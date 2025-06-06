"use client";
import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoRemoveCircleOutline } from "react-icons/io5";

export default function ProductPropertyForm({ categoryProperties, formData }) {
  const [properties, setProperties] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [selectedValues, setSelectedValues] = useState({});

  // Load product properties from formData
  useEffect(() => {
    if (formData?.properties?.length > 0) {
      setProperties(formData.properties);
    }
  }, [formData]);

  // Merge category properties while preventing duplicates
  useEffect(() => {
    if (categoryProperties?.length > 0) {
      const existingParts = new Set(properties.map((prop) => prop.part));

      const newProperties = categoryProperties
        .filter((prop) => !existingParts.has(prop.part))
        .map((prop) => ({
          ...prop,
          value: "", // Initialize value field
        }));

      setProperties((prev) => [...prev, ...newProperties]);
    }
  }, [categoryProperties]);

  function addProperty() {
    setProperties((prev) => [...prev, { part: "", value: "", values: [] }]);
  }

  function removeProperty(index) {
    setProperties((prev) => prev.filter((_, i) => i !== index));
  }

  function handleChange(index, field, value) {
    setProperties((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  }

  function handleSelectChange(index, value) {
    setSelectedValues((prev) => ({
      ...prev,
      [index]: value !== "",
    }));
    setInputValues((prev) => ({
      ...prev,
      [index]: "",
    }));
    handleChange(index, "value", value);
  }

  function handleInputChange(index, value) {
    setInputValues((prev) => ({
      ...prev,
      [index]: value,
    }));
    handleChange(index, "value", value);
  }

  return (
    <div className="bg-primary w-full rounded-lg border p-4 border-slate-600">
      <h1 className="text-lg font-bold mb-2">Product Properties</h1>
      <span className="xs italic">*Note: Select parent category to get properties</span>

      {properties.map((items, index) => (
        <div key={index} className="flex gap-2 flex-col">
          <div className="mt-4">
            <label className="block font-medium">{items.part}</label>
            
            {items.values?.length > 0 ? (
              <select
                name="value"
                className="w-full p-2 rounded-md bg-secondary text-xs focus:ring-0 focus:outline-none mt-2"
                onChange={(e) => handleSelectChange(index, e.target.value)}
                value={items.value || ""}
              >
                <option value="">Select</option>
                {items.values.map((value, idx) => (
                  <option key={idx} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            ) : (
              <input
                name="value"
                value={items.value || ""}
                type="text"
                placeholder="Enter value..."
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="w-full p-2 rounded-md bg-secondary text-xs focus:ring-0 focus:outline-none"
              />
            )}
          </div>

          {!selectedValues[index] && (
            <input
              onChange={(e) => handleInputChange(index, e.target.value)}
              name="value"
              value={items.value || ""}
              type="text"
              placeholder="Enter value..."
              className="w-full p-2 rounded-md bg-secondary text-xs focus:ring-0 focus:outline-none"
            />
          )}

          <span className="text-xs italic">Note: Select value or Enter value above</span>
        </div>
      ))}

      <div className="flex gap-4 flex-col mt-4">
        {properties?.map((item, index) => (
          <div
            className="flex flex-col gap-2 border border-slate-500 p-2 rounded-md"
            key={index}
          >
            <div className="flex gap-4 justify-between">
              <label>Part {index + 1}</label>
              <button
                title="Remove"
                className=""
                type="button"
                onClick={() => removeProperty(index)}
              >
                <IoRemoveCircleOutline size={24} />
              </button>
            </div>
            <div className="flex gap-2">
              <input
                required
                type="text"
                name="part"
                placeholder="Enter part..."
                className="w-full p-2 rounded-md bg-secondary text-xs focus:ring-0 focus:outline-none"
                value={item.part}
                onChange={(e) => handleChange(index, "part", e.target.value)}
              />
              <input
                required
                name="value"
                type="text"
                placeholder="Enter value..."
                className="w-full p-2 rounded-md bg-secondary text-xs focus:ring-0 focus:outline-none"
                value={item.value}
                onChange={(e) => handleChange(index, "value", e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addProperty}
        className="mt-3 flex items-center gap-1 bg-blue-600 text-primarytext px-3 py-1 rounded text-sm"
      >
        <BiPlus /> Add Property
      </button>
    </div>
  );
}
