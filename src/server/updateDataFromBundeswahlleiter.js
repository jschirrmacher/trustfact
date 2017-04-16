const fetchUrl = require('fetch').fetchUrl
const libxmljs = require('libxmljs')
const fs = require('fs')
const models = require('./models')
const winston = require('winston')

const fileName = './bundeswahlleiter.html'

const update = process.argv.length > 1 && process.argv[1] === 'update'

let existingData

models.sequelize.sync()
    .then(() => models.party.findAll({raw: true}))
    .then(data => {
        existingData = data
        fs.open(fileName, 'r', function(error, fd) {
            if (error || new Date() - new Date(fs.fstatSync(fd).mtime) > 3600000) {
                fetchUrl('https://bundeswahlleiter.de/parteien/unterlagensammlung/downloads.html', (error, meta, text) => {
                    fs.writeFile(fileName, text)
                    parse(text)
                })
            } else {
                fs.readFile(fileName, (err, text) => parse(text.toString()))
            }
            if (fd) {
                fs.close(fd, () => {})
            }
        })
    });

function isEqual(a, b) {
    return a && b && (a || '').toUpperCase() === (b || '').toUpperCase()
}

function parse(text) {
    const doc = libxmljs.parseHtml(text)

    let result = []
    let newParties = []
    let changes = []

    doc.find('//tr').forEach((r, i) => {
        let row = libxmljs.parseHtml(r.toString())
        let longName = row.find('//th')
        let shortName = row.find('//td')
        if (longName.length && shortName.length) {
            result[i] = {longName: longName[0].text().trim(), name: shortName[0].text().trim()}
            let link = longName[0].find('//a')
            if (link.length) {
                result[i].link = link[0].attr('href').value().replace('../..', 'https://bundeswahlleiter.de')
            }

            let existing = existingData.filter(d => {
                return d.nameBundeswahlleiter === result[i].longName
            })
            if (existing.length) {
                if (result[i].name !== '' && existing[0].name !== result[i].name) {
                    winston.warn('Different short name ', {current: existing[0].name, new: result[i].name, name: result[i].longName, id: existing[0].id})
                }
                if (result[i].link && existing[0].statutes !== result[i].link) {
                    winston.info('Setting statutes for #' + existing[0].id)
                    models.party.update({statutes: result[i].link}, {where: {id: existing[0].id}})
                }
            } else {
                existing = existingData.filter(d => {
                    return isEqual(d.longName, result[i].longName) || isEqual(d.name, result[i].name)
                })
                if (existing.length === 1) {
                    let shortNameMatch = isEqual(result[i].name, existing[0].name)
                    let longNameMatch = isEqual(result[i].longName, existing[0].longName)
                    if (shortNameMatch !== longNameMatch) {
                        winston.info('Update #' + existing[0].id + ' with name=' + result[i].name + ', longName=' + result[i].longName)
                        changes.push({id: existing[0].id, name1: result[i].name, name2: existing[0].name, longName1: result[i].longName, longName2: existing[0].longName})
                    }
                } else if (existing.length === 0) {
                    newParties.push(result[i])
                    console.log('Creating entry for ' + result[i].longName)
                    models.party.create({
                        name: result[i].name,
                        longName: result[i].longName,
                        nameBundeswahlleiter: result[i].nameBundeswahlleiter,
                        statutes: result[i].link
                    })
                } else {
                    winston.error('Multiple existing match:', result[i], existing, "\n\n")
                }
            }
        }
    })
}
