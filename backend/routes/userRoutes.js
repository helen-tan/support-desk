const express = require('express')
// Use the express Router
const router = express.Router()
const { registerUser, loginUser, getMe } = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

// Export with CommonJS syntax
module.exports = router
