const test = require('../controllers/test');
const routeForSearchByRecognize = require('./recognize');
const searchByText = require('./searchByText');
module.exports = app => {
    app.get ('/', test.test);
    routeForSearchByRecognize(app);
    searchByText(app);
};

