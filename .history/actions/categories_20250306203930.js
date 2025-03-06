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
    // Extract data from formData
    const category = formData.get("category");
    const parentCategory = formData.get("parentCategory");
    const part = formData.get("part");
    const value = formData.getAll("value"); // Use getAll to get multiple values
   
    // Create properties array if part and values exist
    const properties = part && value.length > 0 ? [{ part, values: value }] : [];

    // Create the category object
    const data = {
      category,
      parentCategory: parentCategory || null, // Handle null or undefined
      properties,
    };

    // Save to the database
    await Category.create(data);

    return { success: true, message: "Category saved successfully" };
  } catch (err) {
    console.error("Error saving category:", err);
    return { error: "Failed to save due to a server error" };
  }
}