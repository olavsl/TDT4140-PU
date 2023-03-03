const express = require("express")
const {
    getTravels,
    getTravel,
    createTravel,
    deleteTravel,
    updateTravel
} = require("../controllers/travelController")

const router = express.Router()

// GET all travels
router.get("/", getTravels)

// GET single travel
router.get("/:id", getTravel)

// POST new travel
router.post("/", createTravel)

// DELETE new travel
router.delete("/:id", deleteTravel)

// PATCH (update) travel
router.patch("/:id", updateTravel)

module.exports = router