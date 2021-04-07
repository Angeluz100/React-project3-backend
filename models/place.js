const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({

    place: String, 
    comment: String,

}, {timestamps: true});

module.exports = mongoose.model("PLace", placeSchema);