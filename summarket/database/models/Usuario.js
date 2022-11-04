module.exports = (sequelize, dataTypes) => {
  let alias = 'Usuario';
  let cols = {
    user_id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: dataTypes.STRING,
    },
    lastName: {
      type: dataTypes.STRING,
    },
    email: {
      type: dataTypes.STRING,
    },
    password: {
      type: dataTypes.STRING,
    },
    avatar: {
      type: dataTypes.STRING,
    },
    rol: {
      type: dataTypes.STRING,
    },
  };
  let config = {
    tableName: 'user',
    timestamps: false,
  };

  const Usuario = sequelize.define(alias, cols, config);

  Usuario.associate = function (models) {
    Usuario.belongsToMany(models.Productos, {
      as: 'productos',
      through: 'user_product',
      foreignKey: 'user_id',
      otherKey: 'product_id',
      timestamps: false,
    });
  };

  return Usuario;
};
