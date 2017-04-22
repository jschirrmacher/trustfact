const fetchUrl = require('fetch').fetchUrl
const libxmljs = require('libxmljs')
const fs = require('fs')
const winston = require('winston')
const PartyUpdater = require('./partyUpdater')
const syncData = PartyUpdater()

const fileName = './bundeswahlleiter.html'
const update = process.argv.length > 2 && process.argv[2] === 'update'

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

function parse(text) {
    libxmljs.parseHtml(text).find('//tr').forEach((r, i) => {
        let row = libxmljs.parseHtml(r.toString())
        let longName = row.find('//th')
        let shortName = row.find('//td')
        if (longName.length && shortName.length) {
            current = {
                longName: longName[0].text().trim(),
                name: shortName[0].text().trim()
            }
            let link = longName[0].find('//a')
            if (link.length) {
                current.statutes = link[0].attr('href').value()
            }
            syncData(current, 'nameBundeswahlleiter', (existing, current) => {
                if (!existing) {
                    return update ? {
                        name: current.name,
                        longName: current.longName,
                        nameBundeswahlleiter: current.longName,
                        statutes: current.statutes
                    } : false
                } else {
                    let changed = (!existing.nameBundeswahlleiter && current.longName)
                        || (!existing.statutes && current.statutes && existing.statutes != current.statutes)
                    existing.nameBundeswahlleiter = existing.nameBundeswahlleiter || current.longName
                    existing.statutes = current.statutes
                    return update && changed
                }
            })
        }
    })
}
