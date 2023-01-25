const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;
const v = {type:ObjectId}

const SlideSchema = new Schema({
    // _id:{type:Number},
  name: { type: String },
  image: { type: String },
  productId:{ v }
});

const SlideModels = mongoose.model("slide", SlideSchema, "slides");
module.exports = SlideModels;
