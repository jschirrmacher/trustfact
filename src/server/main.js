/**
 * Definition of index
 *
 * @copyright  2016-today Justso GmbH
 * @author     j.schirrmacher@justso.de
 */
const express = require('express');
const app = express();
const models = require("./models");

const port = process.env.PORT || 3000

function nocache(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.charset = 'utf-8';
    next();
}

app
    .get('/parties', nocache, (req, res) => {
        models.sequelize.sync()
            .then(() => models.party.findAll({attributes: ['id', 'name', 'longName']}))
            .then(data => res.json(data));
    })
    .get('/parties/:id', nocache, (req, res) => {
        models.sequelize.sync()
            .then(() => models.party.findById(req.params.id))
            .then(data => res.json(data));
    })
    .get('/politicians', nocache, (req, res) => {
        models.sequelize.sync()
            .then(() => models.politician.findAll({
                attributes: ['id', 'firstname', 'lastname'],
                include: models.party
            }))
            .then(data => res.json(data));
    })
    .get('/politicians/:id', nocache, (req, res) => {
        models.sequelize.sync()
            .then(() => models.politician.findById(req.params.id))
            .then(data => res.json(data));
    })
    .get('/statements', nocache, (req, res) => {
        models.sequelize.sync()
            .then(() => models.statement.findAll({attributes: ['id', 'text']}))
            .then(data => res.json(data));
    })
    .get('/statement/:id', nocache, (req, res) => {
        models.sequelize.sync()
            .then(() => models.statement.findById(req.params.id))
            .then(data => res.json(data));
    });

app.listen(port, () => {
    console.log('Listening on port ' + port);
});

app.use(function(req, res) {
    res.status(404).send("Sorry can't find that!");
});

app.use(function (err, req, res) {
    console.error(err.stack);
    res.status(500).send('Something broke!')
});
