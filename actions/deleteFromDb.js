"use server";

import { Categories } from "@/models/Categories";
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

    const user = await User.findById(id);
    const category = await Categories.findById(id);

    if (user) {
      let userImage = user?.imageUrl
      const oldKey = userImage?.split("/").pop()
      if (oldKey) {
        await deleteFileFromS3(oldKey)
      }
      await User.deleteOne({ _id: id });
    
      revalidatePath("/dashboard/users");
      return { success: "User deleted successfully" };
    } else if (category) {
      await Categories.deleteOne({ _id: id });
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
