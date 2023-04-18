const express = require('express');
const router = require('./routes/Routes');
const cors = require('cors');
const server = express();

server
.use(express.json())

.use(express.urlencoded({ extended: true, limit: '50mb'}))

.use(cors())

.use('/', router)

.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
	const status = err.status || 500;
	const message = err.message || err;
	res.status(status).send(message);
})

module.exports = server;