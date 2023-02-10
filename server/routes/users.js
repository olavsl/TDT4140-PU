const express = require("express")
const User = require("../schema/userModel")

const router = express.Router()

// GET all users
router.get("/", (req, res) => {
    res.json({mssg: "GET all users"});
})

// GET single user
router.get("/:id", (req, res) => {
    res.json({mssg: "GET single user"});
})

// POST new user
router.post("/", async (req, res) => {
    const {username, password} = req.body

    console.log(username, password)

    try {
        const user = await User.create({username, password})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE user
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE user"});
})

// PATCH (update) user
router.patch("/:id", (req, res) => {
    res.json({mssg: "PATCH user"});
})

module.exports = router