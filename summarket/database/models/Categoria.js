module.exports = (sequelize, dataTypes) => {
  let alias = 'Categorias';
  let cols = {
    idcategory: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: dataTypes.STRING,
    },
  };
  let config = {
    tableName: 'category',
    timestamps: false,
  };

  const Categoria = sequelize.define(alias, cols, config);

  Categoria.associate = function (models) {
    Categoria.hasMany(models.Productos, {
      as: 'productos',
      foreignKey: 'category_id',
    });
  };

  return Categoria;
};
