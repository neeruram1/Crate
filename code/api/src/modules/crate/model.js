'use strict'

module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}

//database model for Crate
// model file allows the use of Sequelize
// model object used in resolvers
//DataTypes is a convenience class
// defne method links the model and table.
