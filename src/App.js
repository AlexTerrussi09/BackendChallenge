const express = require('express');
const router = require('./routes/Routes');
const cors = require('cors')

const server = express();

server.use(express.json())
server.use(express.urlencoded({ extended: true, limit: '50mb'}))
server.use(cors())

server.use('/', router);

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.status(status).send(message);
});

module.exports = server;