// Load database
const User = require("../models/user");
const meal = require("../models/meal");
const order = require("../models/order");

exports.createNewMeal = async function (req, res) {
  let newDoc = await meal.create(req.body); // body-parser
  // console.log(req)
  var result = await meal.findById(newDoc._id);
  console.log(result);
  return res.status(201).json(result);
};

exports.fetchAllMeals = async function (req, res) {
  let allDocs = await meal.find(); // get all info from users

  return res.status(200).json(allDocs);
};

exports.updateMeal = async function (req, res) {
  const updated = await meal.updateOne(
    { _id: req.body.id },
    {
      $set: {
        price: req.body.price,
        name: req.body.name,
        categoryName: req.body.categoryName,
      },
    }
  );
  return res.status(200).json({ mesg: "Ok" });
};

exports.deleteMeal = async function (req, res) {
  const deleted = await meal.deleteOne({ _id: req.body.id });
  return res.status(200).json({ mesg: "Ok" });
};

exports.createNewUser = async function (req, res) {
  // if(!req.body.name) return res.status(422).json({"mg" : "plz i need your name"});

  let newDoc = await User.create(req.body);

  var result = await User.findById(newDoc._id);

  return res.status(201).json(result);
};

exports.fetchAllUsers = async function (req, res) {
  let allDocs = await User.find(); // get all info from users
  console.log(allDocs);
  return res.status(200).json(allDocs);
};

exports.updateUser = async function (req, res) {
  const updated = await User.updateOne(
    { _id: req.body.id },
    { $set: { name: req.body.name } }
  );
  return res.status(200).json({ mesg: "Ok" });
};

exports.deleteUser = async function (req, res) {
  const deleted = await User.deleteOne({ _id: req.body.id });
  return res.status(200).json({ mesg: "Ok" });
};

exports.createNewOrder = async function (req, res) {
  let newDoc = await order.create(req.body); // body-parser
  // console.log(req)
  var result = await order.findById(newDoc._id);
  console.log(result);
  return res.status(201).json(result);
};

exports.fetchAllOrders = async function (req, res) {
  let allDocs = await order.find(); // get all info from users

  return res.status(200).json(allDocs);
};

exports.updateOrder = async function (req, res) {
  const updated = await order.updateOne(
    { _id: req.body.id },
    { $set: { totalPrice: req.body.totalPrice, meals: req.body.meals } }
  );
  return res.status(200).json({ mesg: "Ok" });
};

exports.deleteOrder = async function (req, res) {
  const deleted = await order.deleteOne({ _id: req.body.id });
  return res.status(200).json({ mesg: "Ok" });
};
