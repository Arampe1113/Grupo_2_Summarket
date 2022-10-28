module.exports = (sequelize, dataTypes) => {
    let alias = "Marcas" 
    let cols = {
        idbrand: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "brand",
        timestamps: false
    }

    const Marca = sequelize.define(alias, cols, config)
    
    Marca.associate = function(models) {
        Marca.hasMany(models.Productos, {
            as: "productos",
            foreignKey: "brand_id"
        })
    }

    return Marca
}