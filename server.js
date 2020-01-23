const express = require('express');
const helmet = require('helmet');
const carsRouter = require('./cars/cars-router');

const server = express();
const host = process.env.host || 'localhost';
const port = process.env.port || 5000;

server.use(helmet());
server.use(express.json());

server.use('/api/cars', carsRouter);
server.use((error, request, response, next) => {
    response.status(500).json({
        errorMsg: `Something is wrong. ${error}`
    })
})

server.listen(port, host, () => {
    console.log(`We are live at ${port}`);
})