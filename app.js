const express = require("express");
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const winston = require('./config/winston')

const app = express();
const router = express.Router()

// graceful.gracefulify(fs)

// Body Parser Middleware
const jsonParser = bodyParser.json()

// Logging Middleware
app.use(morgan('combined', {stream: winston.stream}))

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

//Index Route Function
const indexRoutes = (router) => {
    router.get('/', (req, res) => res.sendFile(path.join(__dirname + '/client/index.html')))
          .get('/about', (req, res) => res.sendFile(path.join(__dirname + '/client/about.html')))
          .get('/contact', (req, res) => res.sendFile(path.join(__dirname + '/client/contact.html')))
    return router;
}

//Routes
app.use('/', indexRoutes(router))
   .use('/api/v1/algorithms', jsonParser, require('./routes/algorithms'))
   .use('/api/v1/tests', jsonParser, require('./routes/tests'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))