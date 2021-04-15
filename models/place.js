const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    uid: String,
    place: String, 
    comments: String,
    picture: String

}, {timestamps: true});

module.exports = mongoose.model("PLace", placeSchema);