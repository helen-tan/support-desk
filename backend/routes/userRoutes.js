const express = require('express')
// Use the express Router
const router = express.Router()

router.post('/', (req, res) => {
  res.send('Register Route')
})

router.post('/login', (req, res) => {
  res.send('Login Route')
})

// Export with CommonJS syntax
module.exports = router
