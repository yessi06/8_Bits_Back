const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Licenses', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
       quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
       }
      }, { timestamps: false })
};