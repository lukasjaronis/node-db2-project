const router = require("express").Router();

const {
    getCars,
    getCarById,
    addCar,
    updateCar,
    deleteCar
} = require('./model');

// get all cars

router.get('/', (request, response) => {
    getCars()
    .then(cars => {
        response.status(200).json({ cars })
    })
    .catch(error => {
        response.status(500).json({
            errorMsg: `Could not get cars. ${error}`
        })
    })
})

// gets car by id

router.get('/:id', (request, response) => {
    getCarById({id: request.params.id})
    .then(car => response.status(200).json({car}))
    .catch(error => {
        response.status(500).json({
            errorMsg: `There was an error getting car BY ID. ${error}`
        })
    })
})

// adds new car

router.post('/', (request, response) => {
    addCar(request.body)
    .then(newCar => response.status(201).json({newCar}))
    .catch(error => {
        response.status(500).json({
            errorMsg: `There was an error adding car to the database. ${error}`
        })
    })
})
// updates car by ID

router.put('/:id', (request, response) => {
    updateCar(request.params.id, request.body)
    .then(updated => response.status(200).json(updated))
    .catch(error => {
        response.status(500).json({
            errorMsg: `There was an error updating ${request.params.id}`
            
        })
    })
})

// delete car by id
router.delete("/:id", (request, response) => {
    deleteCar(request.params.id)
      .then(() =>
        response.status(200).json({ successMsg: `CAR ID ${request.params.id} has been deleted.` })
      )
      .catch(error =>
        response.status(500).json({
          errorMsg: "There was something wrong deleting that car.",
        })
      );
  });

module.exports = router;