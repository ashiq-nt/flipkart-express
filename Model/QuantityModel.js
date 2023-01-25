const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const QuantitySchema = new Schema({
  qty:{type:Number}
});

const QuantityModels = mongoose.model("qty", QuantitySchema, "qtys");
module.exports = QuantityModels;
