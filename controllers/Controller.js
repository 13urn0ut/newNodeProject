const { getAll } = require("../models/Model");

exports.getAll = async (req, res) => {
  try {
    const data = await getAll();
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
