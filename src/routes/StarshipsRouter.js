const { Router } = require('express');
const { getStarships, getStarshipById, postStarships, putStarships, deleteStarship } = require('../controllers/StarshipController.js');
const router = Router()

router.get('/', getStarships);
router.get('/:starshipId', getStarshipById);

router.post('/', postStarships);

router.put('/:starshipId', putStarships);

router.delete('/:starshipId', deleteStarship)

module.exports = router;