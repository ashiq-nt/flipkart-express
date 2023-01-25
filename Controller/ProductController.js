const ProductModel = require("../Model/ProductModel");

module.exports.getProductList = async (request, response) => {
  let { pr_id } = request.params;
  let result = await ProductModel.findById(pr_id);
  response.send({
    status: true,
    product: result,
  });
};

module.exports.getAllProductList = async (request, response) => {
  // let { type_id } = request.params;
  let result = await ProductModel.find();
  response.send({
    status: true,
    product: result,
  });
};

module.exports.getProductTypeList = async (request, response) => {
  let { type } = request.params;
  let result = await ProductModel.find({ type_id: type });
  response.send({
    status: true,
    product: result,
  });
};

module.exports.ProductFilter = async (request, response) => {
  let { type, L_cost, H_cost, brand, sort, product } = request.body;

  sort = sort ? sort : 1;

  const filterData = {};
  //  console.log(l_cost);
  // const d = brand.id;
  if (type !== undefined) filterData["type_id"] = type;
  if (product !== undefined) filterData["name"] = product;
  if (L_cost !== undefined && H_cost !== undefined)
    filterData["price"] = { $gt: L_cost, $lt: H_cost };
  if (brand !== undefined) filterData["brand"] = brand;
  try {
    let result = await ProductModel.find(filterData, {
      _id: 1,
      name: 1,
      description: 1,
      offers: 1,
      discount: 1,
      delivey: 1,
      price: 1,
      image: 1,
      cuisine_id: 1,
      brand: 1,

      thumb: 1,
      aggregate_rating: 1,
      rating_text: 1,

      type_id: 1,
    }).sort({
      price: sort,
    });
    if (result.length === 0) {
      response.send({
        status: false,
        message: "Product is not found",
      });
    } else {
      response.send({
        status: true,
        product: result,
      });
      console.log(result);
    }
  } catch (error) {
    mongoDbError(error.message);
    response.status(500).send({
      status: false,
      message: "invalid id is passed",
    });
  }
};

module.exports.searchProduct = async (request, response) => {
  let { product } = request.body;

  let result = await ProductModel.find({
    name: { $regex: product + ".*", $options: "i" },
  });
  response.send({
    status: true,
    result,
  });
};

// module.exports.filter = async (request, response) => {
//   let {
//     mealtype,
//     location,
//     l_cost,
//     h_cost,
//     sort,
//     cuisine,
//     itemsPerPage,
//     page,
//   } = request.body;

//   sort = sort ? sort : 1;
//   page = page ? page : 1;
//   itemsPerPage = itemsPerPage ? itemsPerPage : 2;

//   let staringIndex = page * itemsPerPage - itemsPerPage;
//   let lastIndex = page * itemsPerPage;
//   // fvalue = fvalue ? fvalue : 0;
//   const filterData = {};
//   // console.log(mealtype);

//   // const h_cost = 500;

//   if (mealtype !== undefined) filterData["mealtype_id"] = mealtype;
//   if (location !== undefined) filterData["location_id"] = location;
//   if (l_cost !== undefined && h_cost !== undefined)
//     filterData["min_price"] = { $gt: l_cost, $lt: h_cost };
//   if (cuisine !== undefined) filterData["cuisine_id"] = { $in: cuisine };
//   console.log(filterData);
//   try {
//     let result = await RestaurantsModel.find(filterData, {
//       _id: 1,
//       name: 1,
//       city: 1,
//       locality: 1,
//       location_id: 1,
//       min_price: 1,
//       image: 1,
//       cuisine_id: 1,
//       cuisine: 1,
//       city_id: 1,
//       thumb: 1,
//       aggregate_rating: 1,
//       rating_text: 1,
//       contact_number: 1,
//       mealtype_id: 1,
//     }).sort({
//       min_price: sort,
//     });
//     const filterResult = result.slice(staringIndex, lastIndex);

//     if (result.length === 0) {
//       response.send({
//         status: false,
//         message: "Restaurant is not found",
//       });
//     } else {
//       response.send({
//         status: true,
//         restaurants: filterResult,
//         pageCount: Math.ceil(result.length / 2),
//       });
//       console.log(filterResult);
//     }
//   } catch (error) {
//     mongoDbError(error.message);
//     response.status(500).send({
//       status: false,
//       message: "invalid id is passed",
//     });
//   }
// };
