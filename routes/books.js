const express = require('express')
const router = express.Router()
const controllers = require('../controllers/books')


router.get('/', controllers.findAllDocument)

router.post('/', controllers.insertDocument)

router.get('/:id', controllers.findOne)

router.put('/:id', controllers.editOne)

router.delete('/:id', controllers.deleteDocument)

module.exports = router;
