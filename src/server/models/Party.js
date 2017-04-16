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
        nameStatBundesamt: DataTypes.STRING,
        nameBundeswahlleiter: DataTypes.STRING,
        logoUrl: DataTypes.STRING,
        url: DataTypes.STRING,
        founded: DataTypes.DATEONLY,
        program: DataTypes.STRING,
        statutes: DataTypes.STRING
    });
    return Party;
};
