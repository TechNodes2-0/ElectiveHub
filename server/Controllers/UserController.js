const User = require("../Models/UserModel");

module.exports.getAllUsers = async (req, res) => {
  try {
    console.log("hello")
    const users = await User.find({});
    res.json({
      users,
      message: "Accessed users successfully"
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
