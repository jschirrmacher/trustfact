/**
 * Definition of Party
 *
 * @author     joachimschirrmacher@gmai.com
 */
'use strict';

/*global module*/

module.exports = function(sequelize, DataTypes) {
    var Party = sequelize.define('party', {
        name: DataTypes.STRING,
        longName: DataTypes.STRING,
        logoUrl: DataTypes.STRING
    });
    return Party;
};
