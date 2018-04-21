
const { Router } = require('express')
const router = Router()


router
  .get('/', (req, res) => res.send('Hello World!!'))
  .get('/hello', (req, res) => res.send('From Hello!'))

  module.exports = router