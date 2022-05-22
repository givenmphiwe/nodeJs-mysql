module.exports = app => {
    const EpicdevDB = require("../controllers/controller.js");
    var router = require("express").Router();

    // Create a new EpicdevDB
    router.post("/", EpicdevDB.create);
    // Retrieve all EpicdevDB
    router.get("/", EpicdevDB.findAll);
    // Retrieve all EpicdevDB
    router.get("/published", EpicdevDB.findAllPublished);
    // Retrieve a single EpicdevDB with id
    router.get("/:id", EpicdevDB.findOne);
    // Update a EpicdevDB with id
    router.put("/:id", EpicdevDB.update);
    // Delete a EpicdevDB with id
    router.delete("/:id", EpicdevDB.delete);
    // Delete all EpicdevDB
    router.delete("/", EpicdevDB.deleteAll);
    app.use('/api/Home-list', router);
  };