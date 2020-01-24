const request = require ('request-promise-native');

const findByAudd = async (q) => {

    const data = {
        'api_token': '7957ccbeacca9b8757b9aabddfa3cd8a'
    };
    const uri = `https://api.audd.io/findLyrics/?q=${q}`;

    return await request ({
        uri: encodeURI (uri),
        form: data,
        method: 'POST'
    });

};
const findByDezzer = async (obj) => {
    const uri = `https://api.deezer.com/search?q=title:"${obj.title}" artist:"${obj.artist}"`;
    return await request ({
        uri: encodeURI (uri),
        method: 'GET'
    });
};

const searchPreviewInDeezerByTitle = (titlle, arrWithOnlyOneAnswer) => {
    let i = 0;
    if (arrWithOnlyOneAnswer.length !== 0) {
        while (arrWithOnlyOneAnswer[i].title.toLowerCase () !== titlle.toLowerCase () && i < arrWithOnlyOneAnswer.length - 1) {
            i++;
        }
        if (arrWithOnlyOneAnswer[i].title.toLowerCase () === titlle.toLowerCase ()) {
            return arrWithOnlyOneAnswer[i].preview;
        }
    }

};

const parsePreviewByDezzer = async (obj) => {
    const result = await findByDezzer (obj);
    return searchPreviewInDeezerByTitle (obj.title, JSON.parse (result).data);
};

const parseAnswer = async (body) => {
    const arrOfResult = [];
    if (!body.result) {
        return;
    }
    for (const obj of body.result) {
        const element = {
            artist: obj.artist,
            title: obj.title
        };
        element.preview = await parsePreviewByDezzer (element);
        arrOfResult.push (element);
    }
    return arrOfResult;
};

const searchMusicByLyrics = (req, res) => {
    findByAudd (req.body.data)
        .then ((data) => {
            return parseAnswer (JSON.parse (data));
        })
        .then (answer => {
            res.json (answer);
        })
        .catch ((err) => {
            console.log (err);
            res.status (400).json ({message: err.message});
        });
};

module.exports = {
    searchMusicByLyrics
};
