const express = require("express")

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
router.post("/", (req, res) => {
    res.json({mssg: "POST new user"});
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