const { Router } = require('express');
const { getAllFilms, getFilmById, putFilms, postFilms, deleteFilms } = require('../controllers/FilmController');
const router = Router();

router
.get('/', getAllFilms)
.get('/:filmId', getFilmById)
.post('/', postFilms)
.put('/:filmId', putFilms)
.delete('/:filmId', deleteFilms)

module.exports = router;