'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.addColumn(
            'parties',
            'program',
            Sequelize.STRING
        )
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.removeColumn('parties', 'program')
    }
}
