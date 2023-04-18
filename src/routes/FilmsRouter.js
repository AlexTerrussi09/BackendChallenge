const { Router } = require('express');
const { getAllFilms, getFilmById, putFilms, postFilms, deleteFilms } = require('../controllers/FilmController');
const router = Router();


router.get('/', getAllFilms)

router.get('/:filmId', getFilmById)

router.post('/', postFilms)

router.put('/:filmId', putFilms)

router.delete('/:filmId', deleteFilms)

module.exports = router;