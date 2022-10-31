module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario" 
    let cols = {
        user_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        rol: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "user",
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config)
    
    return Usuario
}