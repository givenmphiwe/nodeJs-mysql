const db = require("../models");
const Epicdev = db.Assessment;
const Op = db.Sequelize.Op;

// Create and Save new
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Name cannot be empty!"
    });
    return;
  }
  // Create a DB
  const database = {
    name: req.body.name,
    surname: req.body.surname,
    username: req.body.username,
    password_uid: req.body.password_uid,
    email: req.body.email,
    homeNumber: req.body.homeNumber,
    cellNumber: req.body.cellNumber,
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };
  // Save in the database
  Epicdev.create(database)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Assessment DB."
      });
    });
};
// Retrieve all from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Epicdev.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};
// Find a single db with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Epicdev.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving with id=" + id
        });
      });
};
// Update a Epicdev by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Epicdev.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update with id=${id}. Maybe was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating with id=" + id
      });
    });
  
};
// Delete the specified id in the request
exports.deleteA = (req, res) => {
    const id = req.params.id;
    Epicdev.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete with id=${id}. was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete with id=" + id
        });
      });
};
// Delete all from the database.
exports.deleteAll = (req, res) => {

  Epicdev.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all"
          });
        });
  
};
// Find all published 
exports.findAllPublished = (req, res) => {
  Epicdev.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving"
      });
    });
};