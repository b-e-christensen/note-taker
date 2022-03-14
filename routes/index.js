const api = require('./apiRoutes')
const html = require('./htmlRoutes')
const router = require('express').Router()

router.use('/api', api)
router.use(html)

module.exports = router