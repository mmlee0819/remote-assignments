const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use('/', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))


app.set('view engine', 'pug')

const sumRoutes = require('./routes/sum')

app.use('/sum', sumRoutes)


app.get('/', (req, res) => {
  res.send('Hello, My Server!')
})

app.get('/getData', (req, res) => {
  const number = req.query.number
  const stringToNumber = Number(number)
  const sum = (1 + stringToNumber) * stringToNumber / 2
  if (!number) {
    res.send('Lack of Parameter')
  } else if (!stringToNumber || stringToNumber <= 0) {
    res.send('Wrong Parameter');
  } else if (stringToNumber > 0) {
    res.send(`${sum}`)
  }
})

app.get('/sum.html', (req, res) => {
  res.render('sum.html')
})


app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})

