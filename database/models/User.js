module.exports = function (sequelize, dataTypes) {
    
    let alias = 'User';
    
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuario: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fecha_nacimiento: {
            type: dataTypes.DATE
        },
        created_at: {
            type: dataTypes.DATE
        }
    }
    
    let config = {
        tableName : "usuarios",
        timestamps:true,
        underscored: true,
    };
    
    const User = sequelize.define(alias, cols, config);

    
    User.associate = function(models) {
    User.hasMany(models.Product, {
        as: "productos",
        foreignKey: "id_usuario"
    });
};

    return User;
}