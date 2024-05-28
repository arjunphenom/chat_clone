const {register} = require("../controller/userController");
const routes = require("express").Router();
routes.post("/register",register)
module.exports = routes;