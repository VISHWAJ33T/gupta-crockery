import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  usid: { type: String, unique: true, required: [true, "USID is Required"] },
  name: { type: String, required: [true, "Name is Required"] },
  email: { type: String, required: [true, "email is Required"] },
  photoURL: { type: String },
  cartItems: { type: Array },
});

const User = models.User || model("User", UserSchema);

export default User;
