module.exports = function(sequelize, DataTypes){
    var thucdon = sequelize.define('thucdon',{
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        lich_id: DataTypes.INTEGER(11),
        thucpham_id: DataTypes.INTEGER(11),
        monan_id: DataTypes.INTEGER(11)
    },{
        tableName: 'thucpham', 
        createdAt: 'created_time',
        updatedAt: 'updated_time',
        deletedAt: 'deleted_time',
        paranoid: true,
        classMethods: {
            associate: function(models) {
            
            }
        }
    });
    return thucdon;
};