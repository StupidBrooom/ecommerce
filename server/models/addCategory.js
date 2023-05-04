const mongoose = require("mongoose");

const addCategorySchema = new mongoose.Schema({
    category: { type: String, required: true }
});

module.exports = mongoose.model("addCategory", addCategorySchema);