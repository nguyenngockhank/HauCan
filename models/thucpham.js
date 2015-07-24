module.exports = function(sequelize, DataTypes){
    var thucpham = sequelize.define('thucpham',{
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
        },
        dongia: DataTypes.FLOAT,
        donvi: DataTypes.STRING(20)
    },{
        tableName: 'thucpham', 
        createdAt: 'created_time',
        updatedAt: 'updated_time',
        deletedAt: 'deleted_time',
        paranoid: true,
        classMethods: {
            associate: function(models) {
                thucpham.hasMany(models.monan, {
                    as: 'monans',
                     foreignKey: 'thucpham_id', 
                     through: 'monan_thucpham'
                 });
            }
        }
    });
    return thucpham;
};