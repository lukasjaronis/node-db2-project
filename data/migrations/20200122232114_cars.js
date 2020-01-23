exports.up = function(knex) {
    return knex.schema
      .createTable("cars", tbl => {
        tbl.increments();
        tbl
          .string("vin", 255)
          .unique()
          .notNullable();
        tbl.string("make", 255).notNullable();
        tbl.string("model", 255).notNullable();
        tbl.integer("year").notNullable();
        tbl.integer("mileage").notNullable();
        tbl.string("transmissionType", 255);
        tbl.string("titleStatus", 255);
      })
  
      .createTable("sales", tbl => {
        tbl.increments();
        tbl.string("soldBy", 255).notNullable();
        tbl.integer("finalPrice").notNullable();
        tbl
          .integer("carId")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("cars")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("sales").dropTableIfExists("cars");
  };