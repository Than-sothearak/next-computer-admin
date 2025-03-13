"use server";

import { Categories } from "@/models/Categories";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { mongoDb } from "@/utils/connectDB";
import { deleteFileFromS3 } from "@/utils/uploadFileToS3";
import { revalidatePath } from "next/cache";

export async function deleteById(id) {
  await mongoDb();

  try {
    if (!id) {
      return { error: "ID is required" };
    }

    const [user, category, product] = await Promise.all([
      User.findById(id),
      Categories.findById(id),
      Product.findById(id),
    ]);

    if (user) {
      let userImage = user?.imageUrl;
      const oldKey = userImage?.split("/").pop();
      if (oldKey) {
        await deleteFileFromS3(oldKey);
      }
      await User.deleteOne({ _id: id });

      revalidatePath("/dashboard/users");
      return { success: "User deleted successfully" };
    }

    if (category) {
      await Categories.deleteOne({ _id: id });
      revalidatePath("/dashboard/categories");
      return { success: "Category deleted successfully" };
    }

    if (product) {
      await Product.deleteOne({ _id: id });
      revalidatePath("/dashboard/products");
      return { success: "Product deleted successfully" };
    }
  } catch (err) {
    console.error("Error deleting...:", err);
    return { error: "Failed to delete user due to a server error" };
  }
}
