/**
 * Definition of Politician
 *
 * @author     joachimschirrmacher@gmail.com
 */
'use strict';

/*global module*/

module.exports = function(sequelize, DataTypes) {
    var Politician = sequelize.define('politician', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Politician.belongsTo(models.party);
            }
        }
    });
    return Politician;
};
