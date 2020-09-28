'use strict';
import { basename as _basename, join } from 'path';

import { Sequelize } from 'sequelize';
const fs = require('fs');
const db = {};

// const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const filenames = fs.readdirSync(__dirname);
const basename = _basename(__filename);

filenames
  .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = require(join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
