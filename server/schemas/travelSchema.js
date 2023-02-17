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
    distance: {
        type: String,
        required: false
    }, 
    descripction: {
        type: String,
        required: false
    }
}, { timestamps: true })

travelSchema.static.create = async function(title, country, startDestination, 
    endDestination, price, travelType) {
    if (!title || !country || !startDestination || !endDestination || !price || !travelType) {
        throw Error("All fields, except distance and description, must be filled in!")
    }
    
    const TravelRoutes = await this.findOne({travelID})

    
    return TravelRoutes;
}

module.exports = mongoose.model("TravelRoutes", travelSchema)  