const test = require('../controllers/test');

module.exports = app => {
    app.get ('/', test.test);
};