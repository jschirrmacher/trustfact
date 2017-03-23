/**
 * Definition of Statement
 *
 * @author     joachimschirrmacher@gmail.com
 */
'use strict';
module.exports = function(sequelize, DataTypes) {
    var Statement = sequelize.define('Statement', {
        text: DataTypes.STRING,
        context: DataTypes.STRING,
        when: DataTypes.DATE
    }, {
        classMethods: {
            associate: function(models) {
                Statement.belongsTo(models.politician);
            }
        }
    });
    return Statement;
};
