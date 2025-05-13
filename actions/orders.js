import { Order } from "@/models/Order";
import { mongoDb } from "@/utils/connectDB";

export async function getOrders (query, page) {
  await mongoDb();
    const ITEM_PER_PAGE = 20
    
    try {
      if (query) {
        
        const users = await Order.find({
          $or: [{ 
            customerID: { $regex: query, $options: "i" }
          , customerPhone: { $regex: query, $options: "i" } }],
          
        })
        const count = Order.length;
        return { users, count }
      }
  
      const count = await Order.countDocuments();
      const orders = await Order.find().sort({ createdAt: 1 }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
     
      return { orders, count }
    } catch (err) {
      console.error(err);
      throw new Error("Failed to fetch orders!");
    }
}