'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.addColumn(
            'parties',
            'nameBundeswahlleiter',
            Sequelize.STRING
        )
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.removeColumn('parties', 'nameBundeswahlleiter')
    }
}
