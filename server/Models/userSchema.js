const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    googleId: String,
    displayName: String,
    password: String,
    email: String,
    image: String
}, { timestamps: true });




const userdb = new mongoose.model("users", userSchema);

module.exports = userdb;