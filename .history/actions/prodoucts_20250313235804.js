"use server";
import { Product } from "@/models/Product";
import { mongoDb } from "@/utils/connectDB";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
await mongoDb();



export async function getProduct(query) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    if (query) {
      return await Product.find({
        $or: [
          { productName: { $regex: query, $options: "i" } },

          { BrandName: { $regex: query, $options: "i" } },
        ],
      }).lean()
      .populate("category")
      .populate("parentCategory");
    }
    return await Product.find()
    .sort({ createdAt: -1 })
    .lean()
    .populate("category")
    .populate("parentCategory")
  } catch (err) {
    console.error("Error fetching products:", err);
    return { error: "Failed to fetch due to a server error" };
  }
}



export async function addProduct(prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

  if (!formData || typeof formData.get !== "function") {
    console.error("Invalid or missing formData:", formData);
    return { error: "No valid form data received" };
  }

  const productName = formData.get("productName");
  const brandName = formData.get("brandName");
  const category = formData.get("category");
  const price = formData.get("price");
  const stock = formData.get("stock");
  const status = formData.get("status");
  const decription = formData.get("decription");
  const parentCategory = formData.get("parentCategory");
  const imageFile = formData.get("image");
  const properties = propertiesFormData(formData);

  const productData = {
    productName,
    brandName,
    category,
    price,
    stock,
    status,
    decription,
    parentCategory: parentCategory || null,
    imageFile,
    properties,
  };

  let errors = {};
  if (!productName || !brandName || !category || !price || !stock) {
    if (!productName) errors.productName = "Name is required";
    if (!category) errors.category = "Category  is required";
    if (!brandName) errors.brandName = "BrandName is required";
    if (!stock) errors.stock = "Stock is required";
    if (!price) errors.price = "Price is required";
    return {errors};
  }
  
  const existingName = await Product.findOne({
    productName: formData.get("productName"),
  });
  if (existingName) {
    errors.productName = "This product is already have";
    return { errors };
  }

  if (!productName) {
    if (!productName) errors.productName = "Product is required";
    return { errors };
  }
 console.log(productData)
  try {
    await Product.create(productData);
    return { success: true, message: "Product saved successfully" };
  } catch (err) {
    console.error("Error saving category:", err);
    return { error: "Failed to save due to a server error" };
  }
}



export async function updateProduct(productId, prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const productName = formData.get("productName");
    const brandName = formData.get("brandName");
    const category = formData.get("category");
    const price = formData.get("price");
    const stock = formData.get("stock");
    const status = formData.get("status");
    const decription = formData.get("decription");
    const parentCategory = formData.get("parentCategory");
    const imageFile = formData.get("image");
    const properties = propertiesFormData(formData);
  
  
  
    const productData = {
      productName,
      brandName,
      category,
      price,
      stock,
      status,
      decription,
      parentCategory,
      imageFile,
      properties,
    };
  
   
    let errors = {};
    if (!productName || !brandName || !category || !price || !stock) {
      if (!productName) errors.productName = "Name is required";
      if (!category) errors.category = "Category  is required";
      if (!brandName) errors.brandName = "BrandName is required";
      if (!stock) errors.stock = "Stock is required";
      if (!price) errors.price = "Price is required";
      return {errors};
    }
  
    if (!productName) {
      if (!productName) errors.productName = "Product is required";
      return { errors };
    }
  
    try {
      const product = await Product.findById(productId);
  
      if (!product) {
        return { error: "Product not found" };
      }
      
      await Product.updateOne({ _id: productId }, productData);
      return { success: "Product  updated successfully", data: productData };
    } catch (err) {
      console.error("Error updating category:", err);
      return { error: "Failed to update category due to a server error" };
    }
  } catch (err) {
    console.log(err)
  }

  revalidatePath(`/dashboard/products/${productId}`)
  redirect(`/dashboard/products`) 
}

// Helper function to parse FormData
function propertiesFormData(formData) {
  let properties = [];
  let currentPart = null;

  for (const [name, value] of formData.entries()) {
    if (name === "part") {
      currentPart = { part: value, value: "" };
      properties.push(currentPart);
    } else if (name === "value" && currentPart) {
      currentPart.value = value;
    }
  }

  return properties;
}
