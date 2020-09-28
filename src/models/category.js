'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      title: { type: DataTypes.STRING, allowNull: false },

      imgUrl: { type: DataTypes.STRING, allowNull: false },

      userId: { type: DataTypes.INTEGER },
    },
    {},
  );
  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Item, {
      allowNull: true,
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    });
  };
  return Category;
};
