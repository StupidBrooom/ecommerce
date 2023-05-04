const mongoose = require("mongoose");

const addProductSchema = new mongoose.Schema({
    category: { type: String, required: true },
    name: { type: Boolean, required: true },
    description: { type: String, required: true },
    price: { type: Boolean, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model("addProduct", addProductSchema);