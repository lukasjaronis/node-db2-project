const express = require('express');


const carsRouter = require('./cars/cars-router');
// const salesRouter = require('./sales/sales-router');

const server = express();

server.use(express.json());

// ROUTING
server.use('/api/cars', carsRouter);
// server.use('/api', salesRouter);

server.get("/", (request, response) => {
    response.status(200).send(`<h1>Server is up and running</h1>`);
  });

module.exports = server;