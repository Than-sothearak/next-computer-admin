import mongoose, { model, Schema, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String, 
    require: true, 
    unique: true, 
    min: 3, 
    max:20 
  },

  email: {
    type: String, 
    require: true, 
    unique: true, 
  },

  password: {
    type: String, 
    require: true, 
  },

 img: {
    type: String, 
  },
  isAdmin: {
    type: Boolean, 
    default:fale
  },
  phone: {
    type: String, 
    default:fale
  },
  address: {
    type: String, 
    default:fale
  },
}, {timestamps: true});

export const User = models.User|| model("User", userSchema);
