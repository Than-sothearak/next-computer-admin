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
    const result = {
        category: "",
        properties: [],
      };
    
      let currentPart = null;
    
      for (const entry of formData) {
        const { name, value } = entry;
    
        if (name === "category") {
          result.category = value;
        } else if (name === "part") {
          currentPart = { part: value, values: [] };
          result.properties.push(currentPart);
        } else if (name === "value" && currentPart) {
          currentPart.values.push(value);
        }
      }
   
      console.log(result)


    return { success: true, message: "Category saved successfully" };
  } catch (err) {
    console.error("Error saving category:", err);
    return { error: "Failed to save due to a server error" };
  }
}