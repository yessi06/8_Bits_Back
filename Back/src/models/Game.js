const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('game', { 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        image: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: { 
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        description: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        releaseDate: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        supportedPlatforms: { 
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        price: { 
            type: DataTypes.DECIMAL, 
            allowNull: false,
        },
        review: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, { timestamps: false });
};
