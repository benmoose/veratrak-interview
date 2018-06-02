const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamp')

/**
 * Medicine model.
 */
const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true
  }
})

// adds `updatedAt` and `createdAt` on save
schema.plugin(timestamps)

// export model
module.exports = mongoose.model('Manufacturer', schema)
