"use server";

import { Category } from "@/models/Categories";
import { mongoDb } from "@/utils/connectDB";
await mongoDb();

export async function addCategory (prevState, formData) {
    
    const data = {
        category: formData.category,
        parentCategory: formData.parentCategory,
        properties: formData.parts || [] 
      };

     try {
        await Category.create({
            category: data.category,
            parentCategory:  null || undefined,
            properties: data.properties || []
        })
     } catch (err) {
        console.error("Error saving category:", err);
    return { error: "Failed to save due to a server error" };
     }
}

export async function getCategories () {
    try {

        return await Category.find().sort({ createdAt: -1 });

    } catch {
        console.error("Error fecth category:", err);
        return { error: "Failed to fecth due to a server error" };
    }
}