const Starship = require("../models/Starship")

/*------------------------------------------------------GET------------------------------------------------------*/ 

const getStarships = async ( req, res ) => {

     try {
        const starShips = await Starship.find();
        res.status(200).json(starShips)
     } catch (error) {
        res.status(400).json({ message : error.message})
     }
     
}
const getStarshipById = async (req, res) => {
	try {
		const { starshipId } = req.params;
		const starShip = await Starship.findOne({"_id": starshipId});

      if (starShip) {
         res.status(200).json(starShip)        
      } else {
         res.status(404).json(`Starship  with id = ${starshipId} not found!`)
      }
	} catch (error) {
		res.status(404).json({message : error.message})
	}
}

/*------------------------------------------------------POST------------------------------------------------------*/ 

const postStarships = async (req, res) => { 
	try {
		const { name, model, manufacturer, cost_in_credits,length, max_atmosphering_speed,  crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class, created, edited} = req.body;

		const starShip = await Starship.create({
			name,
			model,
			manufacturer,
			cost_in_credits,
			length,
			max_atmosphering_speed,
			crew,
			passengers,
			cargo_capacity,
			consumables, hyperdrive_rating,
			MGLT,
			starship_class,
			created,
			edited
		})

		res.status(201).json(starShip)
	} catch (error) {
		res.status(400).json({message : error.message})
	}
}

/*------------------------------------------------------PUT------------------------------------------------------*/ 

const putStarships = async (req, res) => {
	try {
	  const { starshipId } = req.params;
	  const { ...changes } = req.body;
  
	  await Starship.findByIdAndUpdate(starshipId, changes);
	  const updatedStaship =  await Starship.findOne({"_id":starshipId});
	  res.status(200).json( updatedStaship);
	  
	} catch (error) {
	  res.status(400).json({ message: error.message });
	}
  };

/*------------------------------------------------------DELETE------------------------------------------------------*/ 
const deleteStarship = async (req, res) => {
	try {
		const { starshipId } = req.params;
      
		await Starship.deleteOne({"_id": starshipId})
		res.status(200).json("Starship removed successfully!")
		
	} catch (error) {
		res.status(400).json({message : error.message})
	}
}

module.exports = {
    getStarships,
    getStarshipById,
    postStarships,
    putStarships,
    deleteStarship
};