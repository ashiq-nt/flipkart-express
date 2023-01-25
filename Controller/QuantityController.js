const QuantityModels = require ("../Model/QuantityModel")

module.exports.getQuantityList = async (request, response) => {
    let result = await QuantityModels.find();
    response.send({
      status: true,
      qty: result,
    });
  };