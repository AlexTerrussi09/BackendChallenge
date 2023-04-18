const Film = require("../models/Film");

/*------------------------------------------------------GET------------------------------------------------------*/

const getAllFilms = async (req, res) => {

	try {
		const films = await Film.find()
		res.status(200).json(films);
	} catch (error) {
		res.status(400).json({ message : error.message});
	}
};

const getFilmById = async (req, res) => {
	try {
		const { filmId } = req.params;
		const film = await Film.findOne({"_id": filmId});
		if (film) {
			res.status(200).json(film)
		} else {
			res.status(404).json(`Film with id = ${filmId} not found!`)
		}
	} catch (error) {
		res.status(400).json({message : error.message})
	}
}

/*------------------------------------------------------POST------------------------------------------------------*/ 

const postFilms = async (req, res) => { 
	try {
		const { title, episode_id, opening_crawl, director, producer, release_date, created, edited } = req.body;

		const film = await Film.create({
			title,
			episode_id,
			opening_crawl,
			director,
			producer,
			release_date,
			created,
			edited
		})

		res.status(201).json(film)
	} catch (error) {
		res.status(400).json({message : error.message})
	}
}

/*------------------------------------------------------PUT------------------------------------------------------*/ 

const putFilms = async (req, res) => {
	try {
	  const { filmId } = req.params;
	  const { ...changes } = req.body;
  
	  await Film.findByIdAndUpdate(filmId, changes);
	  const updatedFilm =  await Film.findOne({"_id":filmId});
	  res.status(200).json( updatedFilm);
	  
	} catch (error) {
	  res.status(400).json({ message: error.message });
	}
  };

/*------------------------------------------------------DELETE------------------------------------------------------*/ 
const deleteFilms = async (req, res) => {
	try {
		const { filmId } = req.params;
		await Film.deleteOne({"_id": filmId})
		res.status(200).json("Film removed successfully!")
		
	} catch (error) {
		res.status(400).json({message : error.message})
	}
}

module.exports = {
    getAllFilms,
	getFilmById,
	postFilms,
	putFilms,
	deleteFilms
}
