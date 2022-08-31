const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('layout')
})


router.post('/', (req, res) => {
  const number = req.body.number
  const stringToNumber = Number(number)
  const sum = (1 + stringToNumber) * stringToNumber / 2
  if (stringToNumber > 0) {
    res.render('sum', { number, sum })
  } else {
    res.render('sum', { wrongMessage: "Lack of Parameter or Wrong Parameter" })
  }
})


module.exports = router