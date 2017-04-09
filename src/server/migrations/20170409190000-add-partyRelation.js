'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.addColumn(
            'politicians',
            'partyId',
            Sequelize.INTEGER
        )
        queryInterface.addColumn(
            'statements',
            'politicianId',
            Sequelize.INTEGER
        )
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.removeColumn('politicians', 'partyId')
        queryInterface.removeColumn('statements', 'politicianId')
    }
}
