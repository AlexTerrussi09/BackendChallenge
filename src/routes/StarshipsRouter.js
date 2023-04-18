const { Router } = require('express');
const { getStarships, getStarshipById, postStarships, putStarships, deleteStarship } = require('../controllers/StarshipController.js');
const router = Router();

router 
.get('/', getStarships)
.get('/:starshipId', getStarshipById)
.post('/', postStarships)
.put('/:starshipId', putStarships)
.delete('/:starshipId', deleteStarship)

module.exports = router;