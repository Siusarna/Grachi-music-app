const test = require('../controllers/test');
const routeForSearchByRecognize = require('./recognize');
module.exports = app => {
    app.get ('/', test.test);
    routeForSearchByRecognize(app);
};