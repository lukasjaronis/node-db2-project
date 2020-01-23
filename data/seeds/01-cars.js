  
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "123",
          make: "Scion",
          model: "TC",
          year: 2012,
          mileage: 130000,
          transmissionType: "automatic",
          titleStatus: "clean"
        },
        {
          vin: "456",
          make: "Toyota",
          model: "Prius",
          year: 2016,
          mileage: 85492,
          transmissionType: "automatic",
          titleStatus: "clean"
        },
        {
          vin: "789",
          make: "Lambo",
          model: "SV",
          year: 2017,
          mileage: 1302,
          transmissionType: "automatic",
          titleStatus: "clean"
        }
      ]);
    });
};