module.exports = (sequelize, dataTypes) => {
    let alias = "HistoriaOrdenes" 
    let cols = {
        order_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        amount: {
            type: dataTypes.INTEGER
        },
        shipping_address: {
            type: dataTypes.STRING
        },
        order_date: {
            type: dataTypes.INTEGER
        },
        order_status: {
            type: dataTypes.STRING
        },
        quantity: {
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "order_history",
        timestamps: false
    }

    const HistoriaOrden = sequelize.define(alias, cols, config)
    
    return HistoriaOrden
}