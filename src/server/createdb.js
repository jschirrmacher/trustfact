/**
 * Definition of createdb
 *
 * @copyright  2017-today
 * @author     joachim.schirrmacher@gmail.com
 */

const models = require("./models");

models.sequelize.sync({force: true});
