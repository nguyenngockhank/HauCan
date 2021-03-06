module.exports = function(sequelize, DataTypes){
    var lichan = sequelize.define('lichan',{
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        buoi: DataTypes.INTEGER(1),
    },{
        tableName: 'lichan', 
        createdAt: 'created_time',
        updatedAt: 'updated_time',
        deletedAt: 'deleted_time',
        paranoid: true,
        classMethods: {
            associate: function(models) {
                lichan.hasMany(models.thucdon, {
                    as: 'thucdons',
                    foreignKey: 'lich_id'
                });
            }
        }
    });
    return lichan;
};