const router = require('express').Router()

// connect your API routes here!
router.use('/album', require('./album.router'))

module.exports = router
