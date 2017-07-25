const express = require('express')
const router = express.Router()
const controllers = require('../controllers/books')


router.get('/', controllers.findAllDocument)

// router.post('/', controllers.insertDocument)

module.exports = router;
