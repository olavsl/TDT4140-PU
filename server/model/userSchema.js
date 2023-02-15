const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { /* Here one can add spesific fields to every new user (e.g. "timestamps: true") */ })

module.exports = mongoose.model("User", userSchema)  