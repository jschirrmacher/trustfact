/**
 * Definition of Party
 *
 * @copyright  2016-today Justso GmbH
 * @author     j.schirrmacher@justso.de
 */

/*global module*/

module.exports = function(sequelize, DataTypes) {
    'use strict';

    var Party = sequelize.define('party', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING
    });

    return Party;
};
