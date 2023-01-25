const OrdersModel = require("../Model/OrdersModel");

module.exports.saveNewOrder = async (request, response) => {
  var data = request.body;
  // mongoose way add a single
  // instance of model
  try {
    var newOrder = new OrdersModel({
      order_id: data.order_id,
      name: data.name,
      mobile: data.mobile,
      email: data.email,
      order_list: data.order_list,
      p_image:data.p_image,
      p_name:data.p_name,
      qty:data.qty,
      p_price:data.p_price,
      payment_id: data.payment_id,
      payment_status: data.payment_status,
    });
    await newOrder.save();
    response.status(200).send({
      status: true,
      message: "Order Place successfully",
    });
  } catch (error) {
    response.status(500).send({
      status: false,
      message: "Invalid id is passed",
    });
  }
};


module.exports.getOrderDetails = async (request, response) => {
  let { email } = request.params;
  try {
    let result = await OrdersModel.find({ email: email });
    response.status(200).send({
      status: true,
      order: result,
    });
  } catch (error) {
    mongoDbError(error.message);
    response.status(500).send({
      status: false,
      message: "Invalid id is passed",
    });
  }
};
