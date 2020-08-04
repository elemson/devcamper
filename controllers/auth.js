const User = require("../models/User");

//desc Get Register Users
//@route GET /user/SSS
//@access Public

const register = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  //   const data = {
  //     name: "*******",
  //     email: "*************",
  //     password: "*******",
  //   };

  try {
    const user = await User.create({ name, email, password, role });
    res.status(201).json({ success: true, data: data });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

module.exports = { register };
