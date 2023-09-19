const express =  require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')

router.get('', movieController.getAllMovies)
router.get('/:id', movieController.getOneMovie)
router.post('', movieController.createMovies)
router.patch('/:id', movieController.updateMovie)
router.delete('/:id', movieController.deleteMovie)

module.exports = router