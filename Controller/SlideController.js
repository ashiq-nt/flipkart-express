const SlideModel = require ("../Model/SlideModel")

module.exports.getSlideList = async (request, response) => {
    let result = await SlideModel.find();
    response.send({
      status: true,
      slide: result,
    });
  };