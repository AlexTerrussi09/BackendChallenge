const Planet = require("../models/Planet")

/*------------------------------------------------------GET------------------------------------------------------*/ 

const getPlanets = async ( req, res ) => {
    
     try {
        const planets = await Planet.find();
        res.status(200).json(planets)
     } catch (error) {
        res.status(400).json({ message : error.message})
     }
}

const getPlanetsById = async (req, res) => {
	try {
		const { planetId } = req.params;
		const planet = await Planet.findOne({"_id": planetId});
      if (planet) {
         res.status(200).json(planet)
      } else {
         res.status(404).json(`Planet with id = ${planetId} not found!`)     
      }
	} catch (error) {
		res.status(400).json({message : error.message})
	}
}
/*------------------------------------------------------POST------------------------------------------------------*/ 

const postPlanets = async (req, res) => { 
	try {
		const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population,  created, edited} = req.body;

		const newPlanet = await Planet.create({
			name,
			rotation_period,
			orbital_period,
			diameter,
			climate,
			gravity,
			terrain,
			surface_water,
			population,
			created,
			edited
		})

		res.status(201).json(newPlanet)
	} catch (error) {
		res.status(400).json({message : error.message})
	}
}

/*------------------------------------------------------PUT------------------------------------------------------*/ 

const putPlanets = async (req, res) => {
	try {
	  const { planetId } = req.params;
	  const { ...changes } = req.body;
  
	  await Planet.findByIdAndUpdate(planetId, changes);
	  const updatedPlanet =  await Planet.findOne({"_id":planetId});
	  res.status(200).json( updatedPlanet);
	  
	} catch (error) {
	  res.status(400).json({ message: error.message });
	}
  };

/*------------------------------------------------------DELETE------------------------------------------------------*/ 
const deletePlanets = async (req, res) => {
	try {
		const { planetId } = req.params;
		await Planet.deleteOne({"_id": planetId})
		res.status(200).json("Planet removed successfully!")
		
	} catch (error) {
		res.status(400).json({message : error.message})
	}
}


module.exports = {
    getPlanets,
    getPlanetsById,
    postPlanets,
    putPlanets,
    deletePlanets
};