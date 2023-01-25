const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuModelsSchema = new Schema({
    // _id:{type:Number},
  name: { type: String },
  content: { type: String },
  image: { type: String },
  type:{ type: Number },
});

const MenuModels = mongoose.model("menu", MenuModelsSchema, "menus");
module.exports = MenuModels;
