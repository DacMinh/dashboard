const User = require("../models/User");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("Xóa thành công");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
module.exports = userController;
