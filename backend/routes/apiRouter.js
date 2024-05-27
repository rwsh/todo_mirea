const express = require("express");

const apiController = require("../controllers/api.js")
const apiRouter = express.Router();

apiRouter.use("/add", apiController.addItem);
apiRouter.use("/load", apiController.loadItems);
apiRouter.use("/maxid", apiController.maxId);
apiRouter.use("/delete/:id", apiController.deleteItem);
apiRouter.use("/deletedone", apiController.deleteDone);
apiRouter.use("/check/:id/:check", apiController.checkItem);

module.exports = apiRouter;

