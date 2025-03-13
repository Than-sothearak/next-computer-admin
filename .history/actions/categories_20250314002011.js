"use server";

import { Categories } from "@/models/Categories";
import { mongoDb } from "@/utils/connectDB";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function getCategories (query) {
  await mongoDb();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    if (query) {
      return await Categories.find({
        $or: [{ category: { $regex: query, $options: "i" } }],
      });
    }
     return await Categories.find().sort({ createdAt: -1 })
    
  } catch (err) {
    console.error("Error fetching categories:", err);
    return { error: "Failed to fetch due to a server error" };
  }
}

export async function addCategory(prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

  if (!formData || typeof formData.get !== "function") {
    console.error("Invalid or missing formData:", formData);
    return { error: "No valid form data received" };
  }


  const parsedData = parseFormData(formData);
  const category = parsedData.category;
  let errors = {};

  const existingCatByName = await Categories.findOne({ category: formData.get('category') });
  if (existingCatByName) {
    errors.category = "This category is already have";
    return { errors };
  }
  
  if (!category) {
    if (!category) errors.category = "Category is required";
    return { errors };
  }

  try {
    await Categories.create(parsedData);

  } catch (err) {
    console.error("Error saving category:", err);
    return { error: "Failed to save due to a server error" };
  }

   revalidatePath(`/dashboard/categories/`);
    redirect("/dashboard/categories/");
}

export async function updateCategory(catId, prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const parsedData = parseFormData(formData);

    const category = await Categories.findById(catId);

    if (!category) {
      return { error: "Category not found" };
    }
    await Categories.updateOne({ _id: catId }, parsedData);

  } catch (err) {
    console.error("Error updating category:", err);
    return { error: "Failed to update category due to a server error" };
  }

  revalidatePath(`/dashboard/categories/${catId}`);
  redirect("/dashboard/categories/");
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
      const splitValues = value.split(";");
      currentPart.values = [...currentPart.values, ...splitValues];
    }
  }

  return result;
}
