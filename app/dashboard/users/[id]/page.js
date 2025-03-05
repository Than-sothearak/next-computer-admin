import UserForm from "@/components/UserForm";
import { mongoDb } from "@/utils/connectDB";
import { User } from "@/models/User";
import mongoose from "mongoose";

export default async function SingleUserPage({ params }) {
  const id = await params.id;
  await mongoDb();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return <p className="text-red-500">Invalid User ID!</p>;
  }

  // Use `.lean()` to convert the Mongoose document to a plain object
  const user = await User.findOne({_id: id}).lean();
  

  if (!user) {
    return <p className="text-red-500">User not found!</p>;
  }

  return (
    <>
      <UserForm userId={id} userData={JSON.parse(JSON.stringify(user))} />
    </>
  );
}
