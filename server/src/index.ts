import express from 'express'

const PORT = 3000

const app = express()

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`)
  next()
})

app.use('/', express.static('static'))

app.get('/api', (req, res) => {
  res.send('Hello Server!')
})

app.listen(PORT, () => {
  console.log(`Server starts on port ${PORT}`)
})
