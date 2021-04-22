// Bring in initial dependecies
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const winston = require('./logger')



// initialize App
const app = express()

// Connect to Database
// // Retrieve DB URI
const db = require('./configs/keys')

// //Create DB Connection, log errors if present
mongoose.connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    !err ? console.log('MongoDB Connected...') : console.log(err)
})

// include Routes
// const route = require('./routes/something.js')

// Initialize logging system
app.use(logger('combined', {stream: winston.stream}))

// Use required parsers
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Declare routes
// app.get('/api', route)

//Handle Production
if (process.env.NODE_ENV === 'production') {
    //Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

// Export App to /bin
module.exports = app
