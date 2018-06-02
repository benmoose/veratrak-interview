const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()

// add request parsing middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// add medicine endpoints
app.use('/medicine', routes.medicine)
app.use('/manufacturer', routes.manufacturer)

// start listening for requests 
const PORT = process.env.PORT || 8000
app.listen(PORT, err => {
  if (err) {
    // log err to external service...
    process.exit(1)
  }

  // attempt connection to db
  require('./utils/db') 

  console.log(`listening on :${PORT}`)
})
