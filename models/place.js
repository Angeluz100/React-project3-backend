const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({

    place: String, 
    comments: String,

}, {timestamps: true});

module.exports = mongoose.model("PLace", placeSchema);