/* jshint indent: 2 */
const sequelize = require('sequelize');
const connection = require('../config/database');

const model = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    visitorName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    visitorEmail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    visitorMobileNumber: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    checkIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    checkOut: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hostName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hostEmail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hostMobileNumber: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user',
    timestamps: true,
      paranoid: true
  });
};
module.exports = model(connection, sequelize);