'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.addColumn(
            'parties',
            'nameStatBundesamt',
            Sequelize.STRING
        )
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.removeColumn('parties', 'nameStatBundesamt')
    }
}
