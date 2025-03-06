"use server";

import { Category } from "@/models/Categories";
import { User } from "@/models/User";
import { mongoDb } from "@/utils/connectDB";
import { revalidatePath } from "next/cache";

export async function deleteById(id) {
  await mongoDb();

  try {
    if (!id) {
      return { error: "ID is required" };
    }

    const user = await User.findById(id);
    const category = await Category.findById(id);

    if (user) {
      await User.deleteOne({ _id: id });
      revalidatePath("/dashboard/users");
      return { success: "User deleted successfully" };
    } else if (category) {
      await Category.deleteOne({ _id: id });
      revalidatePath("/dashboard/categories");
      return { success: "User deleted successfully" };
    } else {
      return { error: "Not found" };
    }
  } catch (err) {
    console.error("Error deleting...:", err);
    return { error: "Failed to delete user due to a server error" };
  }
}
