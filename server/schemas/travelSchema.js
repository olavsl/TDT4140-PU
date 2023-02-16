const mongoose = require("mongoose")

const Schema = mongoose.Schema

const travelSchema = new Schema({
    travelID: {
        type: int,
        required: true
    },
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
    endDestiantion: {
        type: String,
        required: true
    },
    price: {
        type: int,
        required: true
    }, 
    travelType: {
        type: String,
        required: true
    }, 
    distance: {
        type: String,
        required: false
    }, 
    desripction: {
        type: String,
        required: false
    }
}, { /* Here one can add spesific fields to every new user (e.g. "timestamps: true") */ })

travelSchema.static.createTravel = async function(travelID, title, country, startDestination, 
    endDestiantion, price, travelType) {
    if (!travelID || !title || !country || !startDestination || !endDestiantion || !price || !travelType) {
        throw Error("All fields, except distance and description, must be filled in!")
    }
    
    const TravelRoutes = await this.findOne({travelID})

    
    return TravelRoutes;
}

module.exports = mongoose.model("TravelRoutes", travelSchema)  