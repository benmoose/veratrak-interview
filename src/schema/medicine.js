const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamp')

/**
 * Medicine model.
 */
const medicine = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manufacturer'
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  stockLevel: {
    type: Number,
    min: 0,
    default: 0
  }
})

// adds `updatedAt` and `createdAt` on save
medicine.plugin(timestamps)

module.exports = medicine
