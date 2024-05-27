const Item = require("../models/items.js");

exports.loadItems = async function(req, res) {
    const allItems = await Item.find({});
    res.json({ data: allItems});
}

exports.addItem = async function(req, res) {
    const itemId = req.body.id;
    const itemBody = req.body.body;
    const itemDone = req.body.done;

    const item = new Item({id: itemId, body: itemBody, done: itemDone});
    await item.save();
}

exports.deleteItem = async function(req, res) {
    await Item.deleteMany({id: req.params.id});
}

exports.deleteDone = async function(req, res) {
    await Item.deleteMany({done: 1});
}


exports.checkItem = async function(req, res) {
    await Item.updateOne({id: req.params.id}, {done: req.params.check});
}

exports.maxId = async function(req, res) {
    const max = await Item.find({}).sort({"id": -1}).limit(1);
    if(max.length < 1) {
        res.json({"max": 0});
    } else {
        res.json({"max": max[0]['id']});
    }
}
