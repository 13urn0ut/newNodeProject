const { getAll } = require("../models/Model");
const AppError = require("../utils/appError");

exports.getAll = async (req, res, next) => {
  try {
    const data = await getAll();
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    next(new AppError(err.message));
  }
};
