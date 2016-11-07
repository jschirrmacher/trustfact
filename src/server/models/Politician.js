/**
 * Definition of Politician
 *
 * @copyright  2016-today Justso GmbH
 * @author     j.schirrmacher@justso.de
 */

/*global module*/

module.exports = function(sequelize, DataTypes) {
    'use strict';

    var Politician = sequelize.define('politician', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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
