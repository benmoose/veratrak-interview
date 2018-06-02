const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamp')

/**
 * Medicine model.
 */
const manufacterer = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true
  }
})

// adds `updatedAt` and `createdAt` on save
medicine.plugin(timestamps)

module.exports = medicine
