const mongoose = require('mongoose')
const { Router }  = require('express')
const { Manufacturer } = require('../models')

const router = Router()

// get all
router.get('/', (req, res) => {
  Manufacturer.find((err, objects) => {
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
  const instance = new Manufacturer({
    _id: new mongoose.Types.ObjectId(),
    name: body.name
  })
  // save to db
  instance.save((err, object) => {
    if (err) {
      res.status(500).send()
    }
    res.status(201).json(object)
  })
})

module.exports = router
