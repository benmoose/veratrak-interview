const mongoose = require('mongoose')
const { Router }  = require('express')
const { Medicine } = require('../models')

const router = Router()

// get all
router.get('/', (req, res) => {
  Medicine.find((err, objects) => {
    if (err) {
      res.status(500).send()
    }
    res.json(objects)
  })
})

// create
router.post('/', (req, res) => {
  const body = req.body
  // create instance of Medicine
  const instance = new Medicine({
    _id: new mongoose.Types.ObjectId(),
    name: body.name,
    manufacturer: body.manufacturer,
    stockLevel: body.stockLevel
  })
  // save to db
  instance.save((err, object) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(201).json(object)
  })
})

module.exports = router
