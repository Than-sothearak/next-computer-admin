import mongoose from "mongoose";

export const mongoDb = async() => {
 const connection = {}
  try {
    if(connection.isConnecred) return;
    const db = await mongoose.connect(process.env.MONGO_DB_URI);
    connection.isConnecred = db.connection[0].readySate;
  } catch (error) {
    handleError(error);
  }
}