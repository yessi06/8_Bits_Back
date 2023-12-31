const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:"https://res.cloudinary.com/bits8/image/upload/v1695360325/Avatar%20Images/ftme8psm1dbrgyjltb6w.jpg"
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    disable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    // imageBackground: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   defaultValue:"https://res.cloudinary.com/bits8/image/upload/v1695698494/Background%20profile%20images/urrrxq35zjog46z2uyqe.jpg"
    // },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
    {
      timestamps: false,
    },
  );
};

