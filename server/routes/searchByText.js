const controllerForSearch = require('../controllers/searchByText');

module.exports = app => {
    app.post('/api/search', controllerForSearch.searchMusicByLyrics);
};