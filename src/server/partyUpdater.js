const models = require('./models')
const winston = require('winston')

module.exports = function () {
    let promise = models.sequelize.sync().then(() => models.party.findAll())

    return function (current, nameField, setEntry) {
        function isEqual(a, b) {
            return a && b && (a || '').toUpperCase() === (b || '').toUpperCase()
        }

        function updateExisting(existing, current) {
            if (current.name && !existing.name) {
                winston.info('Updating short name of entry#' + existing.id, 'from', existing.name, 'to', current.name)
                existing.name = current.name
            }
            if (current.longName && !existing.longName) {
                winston.info('Updating long name of entry#' + existing.id, 'from', existing.longName, 'to', current.longName)
                existing.longName = current.longName
            }
            let result = setEntry(existing, current)
            return result && (existing && existing.save() ||models.party.create(result))
        }

        promise.then(existingData => {
            let existing = existingData.filter(d => {
                return d[nameField] === current.longName
            })
            if (existing.length) {
               updateExisting(existing[0], current)
            } else {
                existing = existingData.filter(d => {
                    return isEqual(d.longName, current.longName) || isEqual(d.name, current.name)
                })
                if (existing.length === 1) {
                    updateExisting(existing[0], current)
                } else if (existing.length === 0) {
                    winston.info('Creating entry for ' + current.longName)
                    updateExisting(null, current)
                } else {
                    winston.error('Multiple existing match:', current, existing, "\n\n")
                }
            }
        })
    }
}
