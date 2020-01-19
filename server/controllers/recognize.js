const request = require ('request-promise-native');
const fs = require ('fs');

const makeRequestToAudd = (filename, uri) => {
    const pathToFile = './uploads/' + filename;
    const data = {
        'file': fs.createReadStream (pathToFile),
        'return': 'deezer',
        'api_token': 'bbd13e6b21b33af43cc773448b66a87b'
    };

    const options = {
        uri,
        formData: data,
        method: 'POST'
    };

    return request (options);
};

const parseAnswerWithPreview = (result) => {
    return {
        artist: result.result.artist,
        title: result.result.title,
        preview: result.result.deezer.preview
    };
};

const searchMusicByUserFile = (req, res) => {
    const uri = 'https://api.audd.io/';
    makeRequestToAudd (req.file.originalname, uri)
        .then ((result) => {
            const parsedResult = parseAnswerWithPreview (JSON.parse (result));
            res.json (parsedResult);
        })
        .catch (err => {
            res.status (400).json ({message: err.message});
        });
};

const makeRequestToDeezer = async (title, artist) => {
    const uri = `https://api.deezer.com/search?q=title:"${title}" artist:"${artist}"`;
    console.log (uri);
    const options = {
        uri,
        method: 'GET'
    };
    return await request (options);
};

const searchPreviewInDeezerByTitle = (title, arrWithOnlyOneAnswer) => {
    let i = 0;
    while (arrWithOnlyOneAnswer[i].title.toLowerCase () !== title.toLowerCase () && i < arrWithOnlyOneAnswer.length - 1) {
        i++;
    }
    if (arrWithOnlyOneAnswer[i].title.toLowerCase () === title.toLowerCase ()) {
        return arrWithOnlyOneAnswer[i].preview;
    }
};

const makeRequestAndSearchPreviewInAnswer = async element => {
    const {title, artist} = element;
    const result = await makeRequestToDeezer (title, artist);
    return searchPreviewInDeezerByTitle (title, JSON.parse (result).data);
};


const parseAnswerForRecognizeHumming = async (result) => {
    const arrayOfResult = [];
    if(!result.result){
        return;
    }
    for (const obj of result.result.list) {
        const element = {
            artist: obj.artist,
            title: obj.title
        };
        element.preview = await makeRequestAndSearchPreviewInAnswer (element);
        arrayOfResult.push (element);
    }
    return arrayOfResult;
};

const searchMusicByHumming = (req, res) => {
    const uri = 'https://api.audd.io/recognizeWithOffset/';
    makeRequestToAudd (req.file.originalname, uri)
        .then ((result) => {
            return parseAnswerForRecognizeHumming (JSON.parse (result));
        })
        .then ((parsedResult) => {
            res.json (parsedResult);
        })
        .catch (err => {
            console.log (err);
            res.status (400).json ({message: err.message});
        });

};

module.exports = {
    searchMusicByUserFile,
    searchMusicByHumming
};