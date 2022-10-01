'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Coupons.init({
    coupon_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    employee_coupon: DataTypes.BOOLEAN,
    coupon_code: DataTypes.STRING,
    customer_type: DataTypes.STRING,
    customer_groups: DataTypes.ARRAY(DataTypes.STRING)(DataTypes.STRING),
    customers: DataTypes.ARRAY(DataTypes.STRING),
    min_cart_value: DataTypes.INTEGER,
    discount_percentage: DataTypes.INTEGER,
    if_flat: DataTypes.BOOLEAN,
    max_discount: DataTypes.INTEGER,
    branch_type: DataTypes.STRING,
    branches: DataTypes.ARRAY(DataTypes.STRING),
    application_type: DataTypes.ARRAY(DataTypes.STRING),
    start_time: DataTypes.STRING,
    end_time: DataTypes.STRING,
    can_combine: DataTypes.BOOLEAN,
    payment_type: DataTypes.STRING,
    limit_per_customer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Coupons',
  });
  return Coupons;
};