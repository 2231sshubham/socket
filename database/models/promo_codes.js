'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promo_codes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Promo_codes.init({
    promo_code_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    coupon_code: DataTypes.STRING,
    min_amount: DataTypes.INTEGER,
    extra_amount: DataTypes.INTEGER,
    expiry_time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Promo_codes',
  });
  return Promo_codes;
};