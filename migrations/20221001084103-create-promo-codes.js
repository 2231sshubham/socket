'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Promo_codes', {
      promo_code_id: {
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
      coupon_code: {
        type: Sequelize.STRING
      },
      min_amount: {
        type: Sequelize.INTEGER
      },
      extra_amount: {
        type: Sequelize.INTEGER
      },
      expiry_time: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Promo_codes');
  }
};