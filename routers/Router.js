const Router = require("express").Router();
const { getAll } = require("../controllers/Controller");
const validate = require("../validators/validate");

Router.route("/").get(validate, getAll);

module.exports = Router;
