const { Router } = require('express');
const { getPlanets, getPlanetsById, postPlanets, putPlanets, deletePlanets } = require('../controllers/PlanetController.js');
const router = Router()

router
.get('/', getPlanets)
.get('/:planetId', getPlanetsById)
.post('/', postPlanets)
.put('/:planetId', putPlanets)
.delete('/:planetId', deletePlanets)

module.exports = router;


