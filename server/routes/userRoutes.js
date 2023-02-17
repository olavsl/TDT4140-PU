const express = require("express")
const {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    loginUser,
    signupUser,
} = require("../controllers/userController")

const router = express.Router()

// GET all users
router.get("/", getUsers)

// GET single user
router.get("/:id", getUser)

// POST new user
router.post("/", createUser)

// DELETE user
router.delete("/:id", deleteUser)

// PATCH (update) user
router.patch("/:id", updateUser)

// Login
router.post("/login", loginUser) 

// Signup
router.post("/signup", signupUser) 

module.exports = router