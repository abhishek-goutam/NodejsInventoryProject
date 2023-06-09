const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Inventory = sequelize.define("inventory", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  prodDesc: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  qty: {
    type: Sequelize.NUMBER,
    allowNull: false,
  }
});

module.exports = Inventory;