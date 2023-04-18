const { Router } = require('express');

const router = Router();

const FilmsRouter = require('./FilmsRouter')
const PlanetsRouter = require('./PlanetsRouter')
const StarshipsRouter = require('./StarshipsRouter')

router
.use('/films', FilmsRouter)
.use('/planets', PlanetsRouter)
.use('/starships', StarshipsRouter)

module.exports = router;