const routeForSearchByRecognize = require('./recognize');
const searchByText = require('./searchByText');
module.exports = app => {
    routeForSearchByRecognize(app);
    searchByText(app);
};

