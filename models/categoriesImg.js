import mongoose, { Schema, model, models } from "mongoose";

const CategoriesImgSchema = new Schema({
  categoryType: { type: String, required: [true, "Category Type is Required"] },
  imgtl: { type: String, required: [true, "please provide image src"] },
  nametl: { type: String, required: [true, "please provide image name"] },
  imgtr: { type: String, required: [true, "please provide image src"] },
  nametr: { type: String, required: [true, "please provide image name"] },
  imgbl: { type: String, required: [true, "please provide image src"] },
  namebl: { type: String, required: [true, "please provide image name"] },
  imgbr: { type: String, required: [true, "please provide image src"] },
  namebr: { type: String, required: [true, "please provide image name"] },
});

const CategoriesImgs =
  models.CategoriesImgs || model("CategoriesImgs", CategoriesImgSchema);

export default CategoriesImgs;
