const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamp')

/**
 * Medicine model.
 */
const schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manufacturer',
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  stockLevel: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  }
})

// adds `updatedAt` and `createdAt` on save
schema.plugin(timestamps)

// export model
module.exports = mongoose.model('Medicine', schema)
