const mongoose = require("mongoose");


var blogSchema = new mongoose.Schema({
    head: String,
    description: String,
    text: String,
    date: String
});

module.exports = mongoose.model("Blog", blogSchema);