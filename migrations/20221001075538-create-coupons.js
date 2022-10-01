'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Coupons', {
      coupon_id: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      employee_coupon: {
        type: Sequelize.BOOLEAN
      },
      coupon_code: {
        type: Sequelize.STRING
      },
      customer_type: {
        type: Sequelize.STRING
      },
      customer_groups: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      customers: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      min_cart_value: {
        type: Sequelize.INTEGER
      },
      discount_percentage: {
        type: Sequelize.INTEGER
      },
      if_flat: {
        type: Sequelize.BOOLEAN
      },
      max_discount: {
        type: Sequelize.INTEGER
      },
      branch_type: {
        type: Sequelize.STRING
      },
      branches: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      application_type: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      start_time: {
        type: Sequelize.STRING
      },
      end_time: {
        type: Sequelize.STRING
      },
      can_combine: {
        type: Sequelize.BOOLEAN
      },
      payment_type: {
        type: Sequelize.STRING
      },
      limit_per_customer: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Coupons');
  }
};