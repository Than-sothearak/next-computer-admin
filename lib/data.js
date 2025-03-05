import { User } from "@/models/User"
import { mongoDb } from "@/utils/connectDB";

export const fetchUsers = async () => {
    await mongoDb();
    try {
        const users = await User.find();
        return users
    } catch (err) {
        throw new Error("Failed to fecth data")
    }
}