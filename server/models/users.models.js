const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: false },
    real_name: { type: String, required: false },
    real_surname: { type: String, required: false },
    age: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    billing_address: { type: String, required: false },
    isAdmin: { type: Boolean, required: false },
});

module.exports = mongoose.model("user", userSchema);