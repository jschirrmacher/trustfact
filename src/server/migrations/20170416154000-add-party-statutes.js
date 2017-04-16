'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.addColumn(
            'parties',
            'statutes',
            Sequelize.STRING
        )
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.removeColumn('parties', 'statutes')
    }
}
