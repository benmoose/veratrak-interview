const mongoose = require('mongoose')

// attempt to connect to mongo
console.log('connecting to mongodb...')
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('mongodb connected 👌'))
  // on error normally would log to external service
  // in this simple case, though, simply print to stderr
  .catch((err) => {
    console.error('error connecting to mongodb', err)
    process.exit(1)
  })
