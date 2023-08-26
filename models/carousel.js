import mongoose, { Schema, model, models } from "mongoose";

const CarouselSchema = new Schema({
  deviceType: { type: String, required: [true, "Device Type is Required"] },
  imgs: [],
});

const CarouselImgs =
  models.CarouselImgs || model("CarouselImgs", CarouselSchema);

export default CarouselImgs;
