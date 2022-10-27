module.exports = (sequelize, dataTypes) => {
    let alias = "Productos" 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.FLOAT
        },
        discount: {
            type: dataTypes.INTEGER
        },
        quantity: {
            type: dataTypes.INTEGER
        },
        brand_id: {
            type: dataTypes.INTEGER
        },
        color_id: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "products",
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config)

    Producto.associate = function(models) {
        Producto.belongsTo(models.Marcas, {
            as: "marcas",
            foreignKey: "brand_id"
        })

        Producto.belongsTo(models.Colores, {
            as: "colores",
            foreignKey: "color_id"
        })

       Producto.belongsTo(models.Categorias, {
            as: "categorias",
            foreignKey: "category_id"
        })
    }
    
    return Producto
}