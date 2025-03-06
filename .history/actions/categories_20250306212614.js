"use server";

import { Category } from "@/models/Categories";
import { mongoDb } from "@/utils/connectDB";
await mongoDb();

export async function getCategories() {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    return categories;
  } catch (err) {
    console.error("Error fetching categories:", err);
    return { error: "Failed to fetch due to a server error" };
  }
}

export async function addCategory(prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

  try {
    // Parse the form data
    const parsedData = parseFormData(formData);

    // Log the parsed data for debugging
    console.log("Parsed Data:", parsedData);

    // Save to the database
    await Category.create(parsedData);

    return { success: true, message: "Category saved successfully" };
  } catch (err) {
    console.error("Error saving category:", err);
    return { error: "Failed to save due to a server error" };
  }
}

// Helper function to parse FormData
function parseFormData(formData) {
  const result = {
    category: "",
    parentCategory: null,
    properties: [],
  };

  let currentPart = null;

  for (const [name, value] of formData.entries()) {
    if (name === "category") {
      result.category = value;
    } else if (name === "parentCategory") {
      result.parentCategory = value || null;
    } else if (name === "part") {
      currentPart = { part: value, values: [] };
      result.properties.push(currentPart);
    } else if (name === "value" && currentPart) {
        const splitValues = value.split("_");
      currentPart.values.push(splitValues);
    } 
  }

  return result;
}