const mongoose = require('mongoose')
const { medicine, manufacturer } = require('../schema')

const Medicine = mongoose.model('Medicine', medicine)
const Manufacturer = mongoose.model('Manufacturer', manufacturer)

module.exports = {
  Medicine,
  Manufacturer
}
