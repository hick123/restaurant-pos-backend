'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'Item',
    {
      title: { type: DataTypes.STRING, allowNull: false },
      imgUrl: { type: DataTypes.STRING, allowNull: false },
      // userId: { type: DataTypes.INTEGER, allowNull: false },
      sku: { type: DataTypes.STRING },
      price: { type: DataTypes.FLOAT, allowNull: false },
      quantity: { type: DataTypes.INTEGER },
      categoryId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {},
  );
  Item.associate = function (models) {
    Item.belongsTo(models.Category, {
      allowNull: true,
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    });
    // associations can be defined here
  };
  return Item;
};
