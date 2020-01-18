const request = require ('request-promise-native');
const fs = require ('fs');

const makeRequest = filename => {
    const pathToFile = './uploads/' + filename;

    const data = {
        'file': fs.createReadStream (pathToFile),
        'return': 'deezer',
        'api_token': 'bbd13e6b21b33af43cc773448b66a87b'
    };

    const options = {
        uri: 'https://api.audd.io/',
        formData: data,
        method: 'POST'
    };

    return request(options)
};

const searchByRecognize = (req, res) => {
    makeRequest(req.file.originalname)
        .then ((result) => {
            res.json (JSON.parse(result));
        })
        .catch (err => {
            res.status (400).json ({message: err});
        });
};

module.exports = {
    searchByRecognize
};