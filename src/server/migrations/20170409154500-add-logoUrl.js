'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.addColumn(
            'parties',
            'logoUrl',
            Sequelize.STRING
        )
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.removeColumn('parties', 'logoUrl')
    }
}
