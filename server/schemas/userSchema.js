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

userSchema.statics.signup = async function(username, password, confirmedPassword) {
    if (!username || !password || !confirmedPassword) {
        throw Error("All fields must be filled in!")
    }

    const user = await this.findOne({username})

    if (user) {
        throw Error("A user with that username already exists!")
    }

    const match = (password == confirmedPassword)

    if (!match) {
        throw Error("Passwords must match!")
    }

    const newUser = await this.create({username, password})

    return newUser
}

module.exports = mongoose.model("User", userSchema)  