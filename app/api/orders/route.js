import { mongoDb } from "@/utils/connectDB";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
import { redirect } from "next/navigation";

export async function POST(req) {
  await mongoDb();

  try {
    const body = await req.json(); // Parse the request body as JSON
   
    // Map items to include productId instead of _id
    const items = body.items.map((item) => ({
      productId: item._id, // Use _id as productId
      quantity: item.quantity,
      price: item.price,
    }));

    // Update product stock based on the quantity sold
    for (const item of items) {
        await Product.updateOne(
            { _id: item.productId },
            { $inc: { stock: -item.quantity } }
        );
      
    }

    // Create the order object
    const orderData = {
      customerID: body.customerID,
      customerPhone: body.customerPhone,
      items,
      totalAmount: body.totalAmount,
      paymentMethod: body.paymentMethod,
      paymentStatus: body.paymentStatus,
      date: body.date,
    };

    const newOrder = await Order.create(orderData); //
    //  Save the order to MongoDB


    return new Response(JSON.stringify(newOrder), { status: 201 });
  
  } catch (error) {
    console.error("Error saving order:", error);
    return new Response(JSON.stringify({ error: "Failed to save order" }), { status: 500 });
  }
}
