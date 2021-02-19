const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const rfs = require('rotating-file-stream')

const app = express()
const router = express.Router()

const jsonParser = bodyParser.json()

const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect( db, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Set Static File
app.use(express.static('client'))

// Error Logging
app.use(morgan('dev', {
  skip: function (req, res) { return res.statusCode < 400 }
}))

// Log All Requests to Logs
app.use(morgan('combined', { stream: accessLogStream }))

//Index Route Function
const indexRoutes = (router) => {
    router.get('/', (req, res) => res.sendFile(path.join(__dirname + '/client/index.html')))
    return router;
}

//Routes
app.use('/', indexRoutes(router))
   .use('/api/v1/algorithms', jsonParser, require('./routes/algorithms'))
   .use('/api/v1/tests', jsonParser, require('./routes/tests'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))