import mongoose, { Schema, model, models } from "mongoose";

const ItemSchema = new Schema({
  title: { type: String, required: [true, "Title is Required"] },
  description: { type: String, required: [true, "description is Required"] },
  price: { type: Number, required: [true, "price is Required"] },
  stock: { type: Number, required: [true, "stock is Required"] },
  isDiscounted: {
    type: Boolean,
    required: [true, "please mention if there is discount or not"],
  },
  discounted_percent: { type: Number },
  discounted_price: { type: Number },
  category: { type: String, required: [true, "category is Required"] },
  tags: {
    type: Array,
    required: [true, "tags are required to make it searchable"],
  },
  main_img: { type: String, required: [true, "please provide image src"] },
  extra_imgs: { type: Array },
});

const Item = models.Item || model("Item", ItemSchema);

export default Item;
