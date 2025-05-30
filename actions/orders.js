import { Order } from "@/models/Order";
import { mongoDb } from "@/utils/connectDB";
import { revalidatePath } from "next/cache";

export async function getOrders(query, page, sortKey, sortDirection) {
  await mongoDb();
  const ITEM_PER_PAGE = 20;

  let sort = {};
  sort = sortKey
    ? { [sortKey]: sortDirection === "descending" ? -1 : 1 }
    : { date: -1 };

  if (sortKey === "date") {
    sort = { createdAt: sortDirection === "descending" ? -1 : 1 };
  }
  if (sortKey === "price") {
    sort = { totalAmount: sortDirection === "descending" ? -1 : 1 };
  }
  if (sortKey === "status") {
    sort = { paymentStatus: sortDirection === "descending" ? -1 : 1 };
  }

  try {
    if (query) {
      const orders = await Order.find({
        $or: [
          {
            customerID: { $regex: query, $options: "i" },
            customerPhone: { $regex: query, $options: "i" },
          },
        ],
      });
      const count = Order.length;
      return { orders, count };
    }

    const count = await Order.countDocuments();
    const orders = await Order.find()
      .sort(sort)
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return { orders, count };
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch orders!");
  }
}
