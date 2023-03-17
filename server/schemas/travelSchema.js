const mongoose = require("mongoose")
const Schema = mongoose.Schema

const travelSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    startDestination: {
        type: String,
        required: true
    },
    endDestination: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    travelType: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: false
    },
    rating: [{
        type: Number,
        required: false
    }],
    comments: [{
        author: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    }],
    likes: {
        type: Number,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model("TravelRoutes", travelSchema)  