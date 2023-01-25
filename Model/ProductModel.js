const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  // _id: { type: Number },
  name: { type: String },
  description: { type: Array },
  offers: { type: Array },
  discount: { type: Number },
  delivey: { type: String },
  thumb: { type: Array },
  aggregate_rating: { type: Number },
  rating_text: { type: Array },
  price: { type: Number },
  image: { type: String },
  brand: { type: Number},
  type_id: { type: Number },
});
const ProductModel = mongoose.model(
  "product",
  ProductSchema,
  "products"
);
module.exports = ProductModel;
