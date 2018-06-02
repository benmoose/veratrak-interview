const mongoose = require('mongoose')

// connect to db
mongoose.connect(process.env.DATABASE_URL)
  .catch((err) => {
    // log to external service
    console.error(err)
    process.exit(1)
  })
