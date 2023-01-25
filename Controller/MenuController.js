const MenuModels = require("../Model/MenuModel")



module.exports.getMenuTypeList = async (request, response) => {
    let { type_id } = request.params;
    let result = await MenuModels.find({type:type_id});
    response.send({
      status: true,
      menu: result,
    });
  };

  

module.exports.getMenuList = async (request, response) => {
    // let { type_id } = request.params;
    let result = await MenuModels.find();
    response.send({
      status: true,
      menu: result,
    });
  };