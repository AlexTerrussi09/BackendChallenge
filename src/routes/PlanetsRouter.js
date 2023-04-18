const { Router } = require('express');
const { getPlanets, getPlanetsById, postPlanets, putPlanets, deletePlanets } = require('../controllers/PlanetController.js');
const router = Router()

router.get('/', getPlanets);
router.get('/:planetId', getPlanetsById);

router.post('/', postPlanets);

router.put('/:planetId', putPlanets);

router.delete('/:planetId', deletePlanets)

module.exports = router;


