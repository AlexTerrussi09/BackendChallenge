require("dotenv").config();
const server = require('./src/App.js');
const { dbConnection } = require("./src/dataBase/Config.js");

const v1Router = require('./src/routes/Routes.js')

const port = 3001;

server.use('/api/v1/starwars', v1Router)

server.listen(port, (err) => {
	if(err){
		return console.error(err)
	} 
  console.log(`Server listening on port ${port}`);  
});
dbConnection();
 