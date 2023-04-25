const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    category: { type: String, required: true},
    icon: { type: String, required: true},
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    isInStock: { type: Number, required: true },
    price: { type: Number, required: true },
});

module.exports = mongoose.model("product", productSchema);