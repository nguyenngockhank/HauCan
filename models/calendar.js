module.exports = function(sequelize, DataTypes){
    var calendar = sequelize.define('calendar',{
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        ngay: DataTypes.DATE,
        buoi: DataTypes.INTEGER(11)
       
    },{
        tableName: 'calendar', 
        createdAt: 'created_time',
        updatedAt: 'updated_time',
    });
    return calendar;
};