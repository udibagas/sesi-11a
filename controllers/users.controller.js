const { User } = require("../models");

exports.users = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
