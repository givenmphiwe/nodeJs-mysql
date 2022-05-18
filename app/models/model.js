module.exports = (sequelize, Sequelize) => {
    const Assessment = sequelize.define("AssessmentDB", {
      
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return Assessment;
  };