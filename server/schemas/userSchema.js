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

// Static Login method
userSchema.statics.login = async function(username, password) {
    if (!username || !password) {
        throw Error("Both fields must be filled in!")
    }
    
    const user = await this.findOne({username})

    const match = (password == user.password)

    if (!user || !match) {
        throw Error("No user with those credentials!")
    }

    return user
}

module.exports = mongoose.model("User", userSchema)  