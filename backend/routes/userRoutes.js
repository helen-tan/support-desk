const express = require('express')
// Use the express Router
const router = express.Router()
const { registerUser, loginUser } = require('../controllers/userController')

router.post('/', registerUser)

router.post('/login', loginUser)

// Export with CommonJS syntax
module.exports = router
