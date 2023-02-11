require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require("./routes/userRoutes")

// Suppress warning
mongoose.set('strictQuery', true);

// The Express App
const peregrinateApp = express();

// Middleware
peregrinateApp.use(express.json())

peregrinateApp.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for Requests
        peregrinateApp.listen(process.env.PORT, () => {
            console.log("Connected to database & listening on port 3001")
        })
    })
    .catch((error) => {
        console.log(error)
    })

// Routes
peregrinateApp.use("/api/users", userRoutes)