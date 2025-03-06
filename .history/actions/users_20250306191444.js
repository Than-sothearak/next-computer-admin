"use server";

import { Category } from "@/models/Categories";
import { User } from "@/models/User";
import { mongoDb } from "@/utils/connectDB";


export async function getUsers(query) {
  await mongoDb();

  try {
    if (query) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return await User.find({
        $or: [{ username: { $regex: query, $options: "i" } }],
      });
    }

    return await User.find().sort({ createdAt: -1 });
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch users!");
  }
}

export async function addUsers(prevState, formData) {
  await mongoDb();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (!formData || typeof formData.get !== "function") {
    console.error("Invalid or missing formData:", formData);
    return { error: "No valid form data received" };
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const password = formData.get("password");
  const role = formData.get("role");
  let errors = {};
  if (!name || !email || !phone || !password || !address || !role) {
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!phone) errors.phone = "Phone is required";
    if (!password) errors.password = "Password is required";
    if (!role) errors.role = "Role is required";
    if (!address) errors.address = "Address is required";
    return { errors };
  }

  const isAdmin = role === "admin";

  const userData = { username: name, email, phone, isAdmin, address, password };

  try {
    const existingUserByName = await User.findOne({ username: name });
    if (existingUserByName) {
      errors.name = "This username is already registered";
      return { errors };
    }

    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      errors.email = "This email is already registered";
      return { errors };
    }

    await User.create(userData);
    return { success: "User added successfully", data: userData };
  } catch (err) {
    console.error("Error saving user:", err);
    return { error: "Failed to save user due to a server error" };
  }
}

export async function updateUser(userId, prevState, formData) {
  await mongoDb();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const user = await User.findById(userId);
    if (!user) {
      return { error: "User not found" };
    }

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const password = formData.get("password");
    const role = formData.get("role");

    const isAdmin = role === "admin";

    const userData = {
      username: name,
      email,
      phone,
      isAdmin,
      address,
      password,
    };

    // If the password is provided, hash it before updating
    if (password) {
      // You might want to use bcrypt or another hashing function
      // userData.password = hashPassword(password);
    }

    // Update the user with the new data
    await User.updateOne({ _id: userId }, userData);

    return { success: "User updated successfully", data: userData };
  } catch (err) {
    console.error("Error updating user:", err);
    return { error: "Failed to update user due to a server error" };
  }
}

