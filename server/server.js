require("dotenv").config()

const express = require("express")

// The Express App
const peregrinateApp = express();

// Middleware
peregrinateApp.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

peregrinateApp.get('/', (req,res) => {
    res.json({mssg: "Application running"})
})

// Listen for Requests
peregrinateApp.listen(process.env.PORT, () => {
    console.log("Listening on port 3001")
})