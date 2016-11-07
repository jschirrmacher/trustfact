/**
 * Definition of Statement
 *
 * @copyright  2016-today Justso GmbH
 * @author     j.schirrmacher@justso.de
 */

'use strict';

/*global module*/
module.exports = function(sequelize, DataTypes) {

    var Statement = sequelize.define('statement', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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
