const Travel = require("../schemas/travelSchema.js")
const mongoose = require("mongoose")

// GET all travels
const getTravels = async (req, res) => {
    const travels = await Travel.find({}).sort({timestamps: -1})

    res.status(200).json(travels)
}

// GET singel travel
const getTravel = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Not a valid travel ID!"})
    }

    const travel = await Travel.findById(id)

    if (!travel) {
        return res.status(400).json({error: "No travel with that ID!"})
    }

    res.status(200).json(travel)
}

// POST (create) new travel
const createTravel = async (req, res) => {
    const { title, country, startDestination, endDestination, price, duration, 
        travelType, description, rating, comments, timestamps } = req.body

    // Add Travel document to database
    try {
        const travel = await Travel.create({title, country, startDestination, 
            endDestination, price, duration, travelType, timestamps, description, rating, comments})
        res.status(200).json(travel)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE travel
const deleteTravel = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Not a valid travel ID!"})
    }

    const travel = await Travel.findOneAndDelete({_id: id})

    if (!travel) {
        return res.status(400).json({error: "No travel with that ID!"})
    }

    res.status(200).json(travel)
}

// PATCH (update) travel
const updateTravel = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Not a valid travel ID!"})
    }

    const travel = await Travel.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!travel) {
        return res.status(400).json({error: "No travel with that ID!"})
    }

    res.status(200).json(travel)
}

module.exports = {
    getTravels,
    getTravel,
    createTravel,
    deleteTravel,
    updateTravel
}