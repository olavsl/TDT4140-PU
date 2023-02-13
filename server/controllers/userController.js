const User = require("../schema/userSchema.js")
const mongoose = require("mongoose")

// GET all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({username: -1})

    res.status(200).json(users)
}

// GET single user
const getUser = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Not a valid user ID!"})
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(400).json({error: "No user with that ID!"})
    }

    res.status(200).json(user)
}

// POST (create) new user
const createUser = async (req, res) => {
    const {username, password} = req.body

    // Add User document to database
    try {
        const user = await User.create({username, password})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE user
const deleteUser = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Not a valid user ID!"})
    }

    const user = await User.findOneAndDelete({_id: id})

    if (!user) {
        return res.status(400).json({error: "No user with that ID!"})
    }

    res.status(200).json(user)
}

// PATCH (update) user
const updateUser = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Not a valid user ID!"})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!user) {
        return res.status(400).json({error: "No user with that ID!"})
    }

    res.status(200).json(user)
}

// GET login user
const loginUser = async (req, res) => {
    const {username} = req.params;

    const user = await User.findOne({username: username})

    if (!user) {
        return res.status(400).json({error: "No user matches those credentials!"})
    }

    res.status(200).json(user)
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    loginUser,
}