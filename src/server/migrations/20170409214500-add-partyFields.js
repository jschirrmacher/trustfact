'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.addColumn(
            'parties',
            'url',
            Sequelize.STRING
        )
        queryInterface.addColumn(
            'parties',
            'founded',
            Sequelize.DATEONLY
        )
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.removeColumn('parties', 'url')
        queryInterface.removeColumn('parties', 'founded')
    }
}
