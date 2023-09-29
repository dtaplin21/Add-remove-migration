'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cat.hasOne(models.vetRecord, {
         foreignKey: 'catId',
         as: 'vetRecord'
      })
    }
  };
  Cat.init({
    name: DataTypes.STRING,
    weight: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Cat',
  });
  return Cat;
};


async function insertCat() {
  try {
   await db.cat.create({
    name: 'Macy',
    weight: 12.2,
    age: 4.5
   });
   console.log('Record inserted successfully.');
  } catch (error) {
    console.error('Error inserting record:', error);
  } finally {
    // Close the database connection if needed
    db.sequelize.close();
  }
}
