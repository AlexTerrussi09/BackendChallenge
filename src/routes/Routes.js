const { Router } = require('express');

const router = Router();

const FilmsRouter = require('./FilmsRouter')
const PlanetsRouter = require('./PlanetsRouter')
const StarshipsRouter = require('./StarshipsRouter')


router.use('/films', FilmsRouter)

router.use('/planets', PlanetsRouter)

router.use('/starships', StarshipsRouter)

module.exports = router;