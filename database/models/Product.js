module.exports = function (sequelize, dataTypes) {
    
    let alias = 'Product';
    
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
        imagen: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }

    }
    
    let config = {
        tableName : "productos",
        timestamps:true,
        underscored: false,
    };
    
    const Product = sequelize.define(alias, cols, config);

    
    Product.associate = function(models) {
    Product.belongsTo(models.User, {
        as: "usuario",
        foreignKey: "id_usuario"
    });
    Product.hasMany(models.Comentario, {
        as: "comentarios",
        foreignKey: "id_producto"
    });
};

    return Product;
}