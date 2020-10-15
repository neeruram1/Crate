'use strict'

// SurveyImages
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('surveyImages', {
    altText: {
      type: DataTypes.TEXT
    },
    style: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.TEXT
    },
    category: {
      type: DataTypes.STRING
    }
  })
}
