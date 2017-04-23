const fetchUrl = require('fetch').fetchUrl
const fs = require('fs')
const winston = require('winston')
const PartyUpdater = require('./partyUpdater')
const syncData = PartyUpdater()

const fileName = './tmp/wikipedia.json'
const update = process.argv.length > 2 && process.argv[2] === 'update'

fs.open(fileName, 'r', function(error, fd) {
    if (error || new Date() - new Date(fs.fstatSync(fd).mtime) > 3600000) {
        fetchUrl('https://de.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=Liste_der_politischen_Parteien_in_Deutschland&rvprop=content', (error, meta, text) => {
            text = JSON.parse(text).query.pages
            text = text[Object.keys(text)[0]].revisions[0]['*'].match(/\{\|[\S\s]*?\|\}/g)
            fs.writeFile(fileName, JSON.stringify(text))
            parse(text)
        })
    } else {
        fs.readFile(fileName, (err, text) => parse(JSON.parse(text)))
    }
    if (fd) {
        fs.close(fd, () => {})
    }
})

function parse(text) {
    function tableParser(fields) {
        let result = {
            logo: fields[1],
            longName: fields[2],
            name: fields[3] ? fields[3].replace("''keine Kurzbezeichnung''", '') : null
        }
        if (fields.length > 8) {
            result.founded = fixDate(fields[9])
        }
        return result
    }

    function fixDate(value) {
        if (value) {
            let parts = value.split('.')
            if (parts.length > 2 && parts[2].match(/^\d+$/)) {
                return new Date(parts[2].substr(0, 4), parts[1] -1, parts[0], 2)
            } else if (parts[0].match(/^\d+$/)) {
                return new Date(parts[0], 0, 1, 2)
            }
        }
        return null
    }

    text.forEach(table => {
        table
            .replace(/\<ref.*?\<\/ref\>/g, '')
            .replace(/\[\[(.*?)(\|.+?)?\]\]/g, '$1')
            .split('|-').forEach(row => {
                fields = row.split('\n|')
                if (fields.length > 2) {
                    let current = tableParser(fields.map(f => f
                        .replace(/\{\{(.*?)\}\}/, '$1')
                        .replace(/^.*\|/, '')
                        .replace(/^\s*Datei:/, '')
                        .trim() || null))

                    syncData(current, 'nameWikipedia', (existing, current) => {
                        if (!existing) {
                            return update ? {
                                name: current.name,
                                longName: current.longName,
                                nameWikipedia: current.longName,
                                founded: current.founded
                            } : false
                        } else {
                            let changed = (!existing.nameWikipedia && current.longName) || (!existing.founded && current.founded && existing.founded != current.founded)
                            existing.nameWikipedia = existing.nameWikipedia || current.longName
                            existing.founded = existing.founded || current.founded
                            return update && changed
                        }
                    })
                }
        })
    })
}
