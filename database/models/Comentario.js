module.exports = function (sequelize, dataTypes) {
    let alias = 'Comentario';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_producto: {
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.TEXT
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
    };

    let config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: false
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.User, {
            as: 'usuario',
            foreignKey: 'id_usuario'
        });

        Comentario.belongsTo(models.Product, {
            as: 'producto',
            foreignKey: 'id_producto'
        });
    };

    return Comentario;
};
