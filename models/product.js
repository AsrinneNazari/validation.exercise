'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    productName: DataTypes.STRING,
    SupplierID: DataTypes.INTEGER,
    CategoryID: DataTypes.INTEGER,
    UnitType: DataTypes.STRING,
    UnitsInStock: DataTypes.INTEGER,
    Active: DataTypes.BOOLEAN,
    CountryCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};