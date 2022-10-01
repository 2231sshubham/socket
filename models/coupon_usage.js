'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupon_usage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Coupon_usage.init({
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    coupon_id: DataTypes.STRING,
    customer_id: DataTypes.STRING,
    usage_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Coupon_usage',
  });
  return Coupon_usage;
};