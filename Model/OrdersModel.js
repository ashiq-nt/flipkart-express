
const { Schema, model } = require("mongoose");

const OrdersSchema = new Schema({
  order_id: { type: String },
  name: { type: String },
  mobile: { type: Number },
  email: { type: String },
  order_list: { type:String },
  p_image:{ type:String },
  p_name:{ type:String },
  qty:{ type: Number },
  p_price:{ type: Number },
  payment_id: { type: String },
  payment_status: { type: Boolean },
  totalAmount: { type: Number },
});

const OrdersModel = model("order_dt", OrdersSchema, "order_dts");

module.exports = OrdersModel;
