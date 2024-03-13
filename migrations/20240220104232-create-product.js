'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productName: {
        type: Sequelize.STRING
      },
      SupplierID: {
        type: Sequelize.INTEGER
      },
      CategoryID: {
        type: Sequelize.INTEGER
      },
      UnitType: {
        type: Sequelize.STRING
      },
      UnitsInStock: {
        type: Sequelize.INTEGER
      },
      Active: {
        type: Sequelize.BOOLEAN
      },
      CountryCode: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};