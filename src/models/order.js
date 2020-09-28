'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      token: { type: DataTypes.STRING, allowNull: false },
      statusId: { type: DataTypes.INTEGER, allowNull: false },
      subTotal: { type: DataTypes.FLOAT, allowNull: false },
      itemDiscount: { type: DataTypes.FLOAT, defaultValue: 0 },
      tax: { type: DataTypes.FLOAT, defaultValue: 0 },
      total: { type: DataTypes.FLOAT, allowNull: false },
      promo: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
