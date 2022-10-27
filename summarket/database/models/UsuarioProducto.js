module.exports = (sequelize, dataTypes) => {
    let alias = "UsuarioProductos" 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        user_id: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "user_product",
        timestamps: false
    }

    const UsuarioProducto = sequelize.define(alias, cols, config)
    
    return UsuarioProducto
}