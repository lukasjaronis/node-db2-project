const database = require('../db-config');

module.exports = {
    getCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar
};

function getCars() {
    return database('cars');
}

function getCarById(id) {
    return database('cars')
    .where(id)
    .first();
}

function addCar(car) {
    return database('cars')
    .insert(car, 'id')
    .then(addedCar => addedCar)
    .catch(error => {
        console.log(`Error adding car ${error}`)
    })
}

function updateCar(carId, change) {
    console.log(`carId: ${carId} | changes: ${change}`)
    return database('cars')
    .where('cars.id', carId)
    .update(change)
    .then( () => getCarByDetail({id: carId}))
    .catch(error => {
        console.log(`Error updating car. ${error}`)
    })
}

function deleteCar(carId) {
    return database('cars')
    .where('cars.id', carId)
    .del();
}