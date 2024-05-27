const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    id: Number,
    body: String,
    done: Number
});

module.exports = mongoose.model("Item", itemSchema);