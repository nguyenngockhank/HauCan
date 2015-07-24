module.exports = function(sequelize, DataTypes){
    var monan = sequelize.define('monan',{
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        ten: {
            type: DataTypes.STRING(100),
            validate:{
                notEmpty: true
            } 
        }
    },{
        tableName: 'monan', 
        createdAt: 'created_time',
        updatedAt: 'updated_time',
        deletedAt: 'deleted_time',
        paranoid: true,
        classMethods: {
            associate: function(models) {
                monan.hasMany(models.thucpham, {
                    as: 'thucphams', 
                    foreignKey: 'monan_id', 
                    through: 'monan_thucpham'
                });
            }
        }
    });
    return monan;
};