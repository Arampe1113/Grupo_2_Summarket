module.exports = (sequelize, dataTypes) => {
    let alias = "Colores" 
    let cols = {
        idcolor: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "color",
        timestamps: false
    }

    const Color = sequelize.define(alias, cols, config)
    
    return Color
}